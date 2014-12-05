define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Count = require('thirdchannel/models/dashboards/alerts/count');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.programId = options.programId;
            this.id = options.id;
        },
        url: function () {
            return "/programs/" + this.programId + "/dashboards/alerts/sections/"+ this.id +"/alerts.json";
        },
        model: Count
    });
});
