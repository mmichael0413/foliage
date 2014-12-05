define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        serializeObject = require('serializeObject'),

        /**
         * A collection built to deal with infinite scrolling; has methods in place
         * for handling the paging, fetching next page, etc.
         *
         * 
         * @exports thirdchannel/collections/shared/infinite
         */
        InfiniteCollection = Backbone.Collection.extend({
            initialize: function (options) {
                this.option_url = options.url;

                this.listenTo(context, 'filter:query', this.updateQueryString);
                this.listenTo(context, 'filter:queryString', this.updateQueryString);
            },
            currentPage: 1,
            queryString: "",
            url: function(){
                return this.option_url + '?' + this.queryString;
            },

            getNextPage: function() {
                var self = this;
                this.currentPage++;
                this.queryString =  this.queryString.replace(/[page]*(\d+)/, this.currentPage);

                this.fetch().success(function(){
                    self.trigger('nextPage');
                }).fail(function () {
                    self.trigger('error');
                });

                context.trigger('filter:set:quiet', [{name: 'page', value:this.currentPage}]);

            },
            updateQueryString: function(qs){
                this.currentPage = 1;
                qs =  qs.replace(/[page]*(\d+)/, this.currentPage);

                var self = this;
                this.queryString = qs;
                this.fetch({reset:true}).fail(function () {
                    self.trigger('error');
                });
            }
        });
    return InfiniteCollection;

});