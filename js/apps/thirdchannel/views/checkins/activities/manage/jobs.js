define(function(require){
    var Backbone = require('backbone'),
        JobView = require('thirdchannel/views/checkins/activities/manage/job');

    return Backbone.View.extend({
        el: ".manage-activities",

        render: function() {
            this.$jobs = this.$('.jobs-list');
            this.$jobs.empty();
            this.collection.forEach(function(job) {
                this.$jobs.append(new JobView({model: job}).render().$el);
            }, this);
            return this;
        }
    });
});
