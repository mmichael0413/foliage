define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        queryString: "",
        initialize: function(options){
            this.urlStart = options.url + '.json?';

        },
        url: function(){
            return this.urlStart + this.queryString;
        }
    });
});