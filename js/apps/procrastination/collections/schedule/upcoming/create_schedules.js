define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Schedule = require('procrastination/models/schedule/main');
    ScheduleCollection = Backbone.Collection.extend({
        initialize: function(models, options) {
            this.aggregateId = options.aggregateId;
            this.personId = options.personId;
            this.programId = options.programId;
        },
        model: Schedule,
        comparator: 'jobDetail',
        url: function() {
            return context.base_url + '/schedule/list/upcoming/' + this.aggregateId;
        },
        generateLegend: function() {
            var self = this;
            this.jobs = this.groupBy(function(job) {
                return job.get('jobDetail');
            });
            var idx=0;
            _.each(this.jobs, function(job) {
                console.log(idx);
                _.each(job, function(visit) {
                    var jobNum = 'job-' + idx;
                    if (visit.get('dateCompleted')) {
                        jobNum = 'job-completed';
                    }
                    visit.set('jobColor', jobNum);
                });
                idx++;
            });
        }
    });
    return ScheduleCollection;
});
