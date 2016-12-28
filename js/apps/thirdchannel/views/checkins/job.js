define(function(require) {
    var Backbone = require('backbone'),
        TaskList = require('thirdchannel/views/checkins/task_list'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: "job pure-g",

        template: HandlebarsTemplates["thirdchannel/checkins/activity"],

        render: function() {
            this.$el.html(this.template());
            this.$('> .main').html(HandlebarsTemplates['thirdchannel/checkins/job'](this.model));

            var taskListView = new TaskList({
                model:{
                    job: this.model.job,
                    store: this.model.store,
                    incomplete_tasks: this.model.incomplete_tasks,
                    auth_token: window.bootstrap.auth_token
                }
            });

            this.$('> .subsection').html(taskListView.render().el);

            return this;
        }

    });
});
