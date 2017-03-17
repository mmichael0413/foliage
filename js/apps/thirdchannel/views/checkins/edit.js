define(function(require){
    var Backbone = require('backbone'),
        JobView = require('thirdchannel/views/checkins/edit/job');

    return Backbone.View.extend({
        el: ".visit-activities",

        events: {
            "click .checkin-form-btn": "submit"
        },

        render: function() {
            this.$jobs = this.$('#jobs');
            this.$jobs.empty();
            this.model.jobs.forEach(function(job) {
                this.$jobs.append(new JobView({model: job}).render().$el);
            }, this);
            return this;
        },

        submit: function (e) {
            e.preventDefault();
            this.$(".checkin-form-btn").prop('disabled', true);
            this.$(".checkin-form-btn i").removeClass('ic_check').addClass("ic-spin ic_processing");
            this.$('.complete-checkin-tasks form').submit();
        }
    });
});
