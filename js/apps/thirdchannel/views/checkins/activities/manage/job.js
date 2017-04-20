define(function(require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        TaskView = require('thirdchannel/views/checkins/activities/manage/task');

    return Backbone.View.extend({
        className: 'card',
        template: Templates['thirdchannel/checkins/activities/manage/job'],

        render: function() {
            this.$el.append(this.template(this.model));
            if (this.model.tasks) {
                this.model.tasks.forEach(function(task) {
                    this.$el.append(new TaskView({model: task}).render().$el);
                }, this);
            }
            return this;
        }
    });
});
