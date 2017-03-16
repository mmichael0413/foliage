define(function(require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        TaskView = require('thirdchannel/views/checkins/edit/task');

    return Backbone.View.extend({
        className: 'card',
        template: Templates['thirdchannel/checkins/edit/job'],

        render: function() {
            this.$el.append(this.template(this.model));
            this.model.required_tasks.forEach(function(task) {
                this.$el.append(new TaskView({model: task}).render().$el);
            }, this);
            return this;
        }
    });
});