define(function(require){
    var HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpersExt = require('handlebarsHelpersExt'),
        Job = require('thirdchannel/views/checkins/job');

    return Backbone.View.extend({
        className: 'visit section',
        template: HandlebarsTemplates['thirdchannel/checkins/date'],
        render: function() {
            this.$el.html(this.template(this.model));
            this.$jobs = this.$('> .pure-g > .jobs');
            _.each(this.model.jobs, function(job){
                var jobView = new Job({
                    model: {
                        job: job,
                    },
                    hide_toggle: true,
                });
                this.$jobs.append(jobView.render().$el);
            }.bind(this));
            return this;
        }
    });
});
