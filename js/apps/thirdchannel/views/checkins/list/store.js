define(function(require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        JobView = require('thirdchannel/views/checkins/list/job');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/list/store'],

        events: {
            "click .closed": "showJobs",
            "click .open": "hideJobs"
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.$jobs = this.$('.job-list');
            this.$card = this.$('.job-list .card');
            this.$store = this.$('.store');
            this.$link = this.$('.view-activities');
            this.$indicator = this.$('.indicator .ic');
            this.model.get('jobs').forEach(function(job) {
                this.$card.append(new JobView({model: job}).render().el);
            }, this);

            return this;
        },

        showJobs: function() {
            this.$store.removeClass('closed').addClass('open');
            this.$indicator.removeClass('ic_down').addClass('ic_up');
            this.$jobs.slideDown();
            this.$link.slideDown();
        },

        hideJobs: function() {
            this.$store.removeClass('open').addClass('closed');
            this.$indicator.removeClass('ic_up').addClass('ic_down');
            this.$jobs.slideUp();
            this.$link.slideUp();
        }

    });
});
