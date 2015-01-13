define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Section = require('thirdchannel/models/dashboards/special_projects/section');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.programId = options.programId;
        },
        url: function () {
            return "/programs/" + this.programId + "/dashboards/special_projects/sections.json";
        },
        model: Section
    });
});