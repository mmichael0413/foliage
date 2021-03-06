define(function(require) {
    var Backbone = require('backbone');

    return Backbone.Model.extend({
        initialize: function (options) {
            this.options = options;
            this.options.uuid = new Date().getTime();
        },
        url: function () {
            return this.options.baseUrl + "?uuid=" + this.options.uuid + this.options.queryString + "&format=json";
        },
        setQueryString: function (qs) {
            this.options.queryString =  "&" + qs;
            this.options.uuid = new Date().getTime();
        }
    });
});