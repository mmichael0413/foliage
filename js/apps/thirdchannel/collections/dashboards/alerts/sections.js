define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Section = require('thirdchannel/models/dashboards/alerts/section');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.programId = options.programId;
        },
        url: function () {
            return "/programs/" + this.programId + "/dashboards/alerts/sections.json";
        },
        model: Section
    });
});
