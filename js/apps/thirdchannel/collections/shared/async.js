define(function(require) {
    var Backbone = require('backbone'),

        /**
         * A collection used for dealing with responses from the server
         * containing all information. A typical response from the server
         * looks like:
         *
         * {
         *  items: []
         * }
         *
         * 
         * @exports thirdchannel/collections/shared/async
         */
        AsyncCollection = Backbone.Collection.extend({
            queryString: "",

            url : function () {
                return window.location.pathname + '.json?' + this.queryString;
            }

        });
    return AsyncCollection;
});