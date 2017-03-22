define(function(require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        TaskView = require('thirdchannel/views/checkins/activities/add/task');

    return Backbone.View.extend({
        el: '.optional-activities',

        template: Templates['thirdchannel/checkins/activities/add/tasks'],

        render: function() {
            this.$activities = this.$('.activities-list');
            this.$activities.empty();
            this.$activities.html(this.template(this.model));
            this.$list = this.$('.card');
            this.collection.forEach(function(task) {
                this.$list.append(new TaskView({model: task}).render().$el);
            }, this);
            return this;
        }
    });
});
