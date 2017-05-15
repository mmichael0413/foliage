define(function(require){
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        Helpers = require('handlebarsHelpersExt'),
        Geolocation = require('shared/views/utils/geolocation_component');

    var JobView = {
        events: {
            'click': 'startJob'
        },

        template: Templates['thirdchannel/checkins/list/job'],

        initialize: function() {
            if (this.model.canEnableGeolocation === true) {
                setTimeout(function() {
                    this.verifyGeolocation();
                }.bind(this), 100);
            }
        },
        render: function() {
            this.$el.html(this.template(this.model));
            return this;
        },
        startJob: function (e) {
            e.preventDefault();
            if (!this.inprogress) {
                this.inprogress = true;
                this.$('form').submit();
            }
        }
    };

    _.extend(JobView, Geolocation);
    return Backbone.View.extend(JobView);
});
