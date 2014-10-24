define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Collection.extend({
        queryString: "",
        url : function () {
            return window.location.pathname + '.json?' + this.queryString;
        }
    });
});
