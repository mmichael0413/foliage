define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        JobView = require('thirdchannel/views/checkins/edit/job');

    return Backbone.View.extend({
        el: ".visit-activities",

        template: Templates['thirdchannel/checkins/edit/starting'],

        events: {
            "click .checkin-form-btn": "submit"
        },

        initialize: function () {
            this.listenTo(context, 'list:activity:started', this.starting);
        },

        render: function() {
            this.$jobs = this.$('#jobs');
            this.$jobs.empty();
            this.model.jobs.forEach(function(job) {
                this.$jobs.append(new JobView({model: job, collection: job.required_tasks}).render().$el);
            }, this);
            return this;
        },

        submit: function (e) {
            e.preventDefault();
            this.$(".checkin-form-btn").prop('disabled', true);
            this.$(".checkin-form-btn i").removeClass('ic_check').addClass("ic-spin ic_processing");
            this.$('.actions-section form').submit();
        },

        starting: function (e) {
            this.$jobs.empty().append(this.template());
        }
    });
});
