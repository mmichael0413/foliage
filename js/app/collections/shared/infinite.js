define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),

        /**
         * A collection built to deal with infinte scrolling; has methods in place
         * for handling the paging, fetching next page, etc.
         *
         * 
         * @exports app/collections/shared/infinite
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
                
                this.currentPage++;
                context.trigger('filter:set:quiet', [{name: 'page', value:this.currentPage}]);
                context.trigger('filter:request:queryString');
            },
            updateQueryString: function(qs){
                var self = this;
                this.queryString = qs;
                this.fetch({reset:true}).fail(function () {
                    self.trigger('error');
                });
            }
        });
    return InfiniteCollection;

});