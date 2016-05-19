define(function(require){
    var Backbone = require('backbone'),
        JobView = require('thirdchannel/views/checkins/job');

    return Backbone.View.extend({
        el: "#jobs",
        initialize: function(){
            _.each(this.model.jobs, function(job){
                var jobView = new JobView({model: {
                    job: job,
                    store: this.model.store.id,
                    pre_expand: job.pre_expand
                }});
                this.$el.append(jobView.render().$el);
            }.bind(this));
        }
    });
});
