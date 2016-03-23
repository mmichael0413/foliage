define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');

    return Backbone.Collection.extend({
        initialize: function(options) {
            this.programId = options.programId;
        },
        url: function () {
            return "/programs/" + this.programId + "/dashboards/special_projects.json";
        }
    });
});
