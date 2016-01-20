define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        JobView = require('thirdchannel/views/checkins/job'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'job-list',
        loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
        render: function() {
            var dates = _.keys(this.model.jobs_by_date).sort();
            _.each(dates, function(date){
                var job_uuids_for_date = this.model.jobs_by_date[date];
                _.each(job_uuids_for_date, function(job_uuid){
                    var job = this.model.jobs[job_uuid];
                    var jobView = new JobView({model: {job: job, date: date, store: this.model.store}});
                    this.$el.append(jobView.render().el);
                }.bind(this));
            }.bind(this));
            return this;
        }
    });
});
