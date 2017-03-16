define(function(require){
    var Backbone = require('backbone'),
        JobView = require('thirdchannel/views/checkins/edit/job');

    return Backbone.View.extend({
        el: "#jobs",

        render: function() {
            this.$el.empty();
            this.model.jobs.forEach(function(job) {
                this.$el.append(new JobView({model: job}).render().$el);
            }, this);
            return this;
        }
    });
});
