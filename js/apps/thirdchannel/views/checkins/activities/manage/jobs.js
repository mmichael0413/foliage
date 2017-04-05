define(function(require){
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        JobView = require('thirdchannel/views/checkins/activities/manage/job');

    return Backbone.View.extend({
        el: ".manage-activities",

        template: Templates['thirdchannel/checkins/activities/manage/no_tasks'],


        initialize: function() {
            this.listenTo(context, 'list:item:removed', this.noResults);
        },

        render: function() {
            this.$jobs = this.$('.jobs-list');
            if (this.collection.length === 0) {
                this.noResults();
            } else {
                this.$jobs.empty();
                this.collection.forEach(function(job) {
                    this.$jobs.append(new JobView({model: job}).render().$el);
                }, this);
            }

            return this;
        },

        noResults: function() {
            var tasks = this.$('.task');
            if (tasks.length === 0) {
                this.$jobs.empty();
                this.$jobs.html(this.template());
            }
        }
    });
});
