define(function(require) {
    var Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        TaskView = require('thirdchannel/views/checkins/edit/task');

    return Backbone.View.extend({

        template: Templates['thirdchannel/checkins/edit/job'],

        render: function() {
            if (this.collection && this.collection.length >= 0) {
                this.$el.append(this.template(this.model));
                this.$list = this.$('.list');
                this.collection.forEach(function(task) {
                    this.$list.append(new TaskView({model: task}).render().$el);
                }, this);
            }
            return this;
        }
    });
});
