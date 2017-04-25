define(function(require) {
    var context = require('context'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        TaskView = require('thirdchannel/views/checkins/activities/add/task');

    return Backbone.View.extend({

        noResultsTemplate: Templates['thirdchannel/checkins/activities/no_results_without_border'],
        template: Templates['thirdchannel/checkins/activities/add/job'],

        initialize: function () {
            this.listenTo(context, 'list:search:updated', this.noResults);
        },

        render: function() {
            this.$el.html(this.template(this.model));
            this.$list = this.$('.card');
            if (this.collection.length === 0) {
                this.noResults();
            } else {
                this.collection.forEach(function (task) {
                    this.$list.append(new TaskView({model: task}).render().$el);
                }, this);
            }
            return this;
        },

        noResults: function() {
            var tasks = this.$(".card > div:not(.header, .hide, .no-tasks)"),
                noTasks = this.$('.no-tasks');
            if (tasks.length === 0 && noTasks.length === 0) {
                this.$list.append(this.noResultsTemplate());
            } else if (tasks.length !== 0 && noTasks.length !== 0) {
                noTasks.remove();
            }
        }
    });
});
