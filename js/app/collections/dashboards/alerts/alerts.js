define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Alert = require('app/models/dashboards/alerts/alert');

    return Backbone.Collection.extend({
        initialize: function (options) {
            this.programId = options.programId;
            this.id = options.id;
        },
        url: function () {
            return "/programs/" + this.programId + "/dashboards/alerts/sections/"+ this.id +"/alerts.json";
        },
        model: Alert
    });
});
