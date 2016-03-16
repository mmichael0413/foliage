define(function(require){
    var HandlebarsTemplates = require('handlebarsTemplates'),
        HandlebarsHelpersExt = require('handlebarsHelpersExt'),
        Job = require('thirdchannel/views/checkins/job');

    return Backbone.View.extend({
        className: 'visit section',
        template: HandlebarsTemplates['thirdchannel/checkins/date'],
        render: function() {
            this.$el.html(this.template(this.model));
            this.jobs = this.$el.find(".jobs");
            this.jobs.append("<div>Jobs:</div>");
            _.each(this.model.job_uuids, function(job_uuid){
                var jobView = new Job({model: {
                    job: this.model.job_details_by_uuid[job_uuid],
                    hide_toggle: true,
                }});
                this.jobs.append(jobView.render().el);
            }.bind(this));
            return this;
        }
    });
});
