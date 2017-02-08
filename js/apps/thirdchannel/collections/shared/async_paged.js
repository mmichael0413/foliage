define(function(require) {
    var Backbone = require('backbone'),

        /**
         * A collection used for dealing with responses from the server
         * containing page information. A typical response from the server
         * looks like:
         *
         * {
         *  pages: {
         *      totalCount: X
         *      ...
         *  },
         *  items: []
         * }
         *
         * 
         * @exports thirdchannel/collections/shared/async_paged
         */
        AsyncPagedCollection = Backbone.Collection.extend({
            page: 1,
            parse: function (response) {
                this.count = response.pages.totalCount;
                this.pages = response.pages;
                return response.items;
            },
            queryString: "",

            setQueryString: function(qs) {
                this.queryString = qs;
            },

            url : function () {
                return window.location.pathname + '.json?' + this.queryString;
            }

        });
    return AsyncPagedCollection;
});