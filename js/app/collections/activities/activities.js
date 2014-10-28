define(function (require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Activity = require('app/models/activities/activity');


    return Backbone.Collection.extend({
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
        model: Activity,

        getNextPage: function() {
            this.currentPage = this.currentPage++;
            context.trigger('filter:set:quiet', [{name: 'page', value:this.currentPage}]);
            context.trigger('filter:request:queryString');
            return this.fetch();
        },
        updateQueryString: function(qs){
            this.queryString = qs;
        }
    });

});