define(function(require){
    var Backbone = require('backbone'),
        context = require('context'),
        JobView = require('thirdchannel/views/checkins/job'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'job-list',
        loadingHTML: HandlebarsTemplates['thirdchannel/loading_icon'],
        render: function() {
            _.chain(this.model.job_uuids_by_date).keys().sort().each(function(date){
                _.each(this.model.job_uuids_by_date[date], function(job_uuid){
                    var jobView = new JobView({model: {
                        job: this.model.job_details_by_uuid[job_uuid],
                        date: date,
                        store: this.model.store_details
                    }});
                    this.$el.append(jobView.render().el);
                }.bind(this));
            }.bind(this));
            return this;
        }
    });
});
