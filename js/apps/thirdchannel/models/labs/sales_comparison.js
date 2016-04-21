define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        context = require('context'),
        Backbone = require('backbone');


    return Backbone.Model.extend({
        // fetch the meta sales information into this model, then use that to render the meta and sales tabs
        setQueryString: function (qs) {
            this.queryString = qs;
        },
        url: function () {
            return context.links.salesCompare.side +"?" + this.queryString;
        }
    });
});