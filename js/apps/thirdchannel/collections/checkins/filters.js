define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.storeId = options.id;
        },
        url: function () {
            return this.storeId + "/filters.json";
        }
    });
});