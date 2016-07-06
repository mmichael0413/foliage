define(function(require){
    var Backbone = require('backbone'),
        JobView = require('thirdchannel/views/checkins/job');
        context = require('context');
    return Backbone.View.extend({
        el: "#jobs",
        initialize: function(){
            if(this.model.jobs.length == 1){
                this.model.jobs[0].pre_expand = true;
            }

            var self = this;

            var url = window.location.pathname + '/status';
            $.ajax({url: url, method: 'get'}).done(function(data) {
                if(data.status === 200) {
                    $('#submit-report').removeAttr('disabled');
                } else {
                    $('#submit-report').attr('disabled','disabled');
                }

                _.each(self.model.jobs, function(job){
                    var jobView = new JobView({model: {
                        job: job,
                        store: self.model.store.id,
                        pre_expand: job.pre_expand,
                        incomplete_tasks: data.incomplete
                    }});
                    self.$el.append(jobView.render().$el);
                });
            });
        }
    });
});
