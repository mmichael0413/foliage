define(function(require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        TaskView = require('thirdchannel/views/checkins/optional_activities/task');

    return Backbone.View.extend({
        el: '.optional-activities',

        template: Templates['thirdchannel/checkins/optional_activities/tasks'],

        events: {
            'click button' : 'submit'
        },

        render: function() {
            this.$el.empty();
            this.$el.html(this.template());
            this.$list = this.$('.card');
            this.collection.forEach(function(task) {
                this.$list.append(new TaskView({model: task}).render().$el);
            }, this);
            return this;
        },

        submit: function () {
            alert('test');
        }
    });
});
