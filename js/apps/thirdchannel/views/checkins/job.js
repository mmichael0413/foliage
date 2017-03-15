define(function(require) {
    var Backbone = require('backbone'),
        TaskList = require('thirdchannel/views/checkins/task_list');

    return Backbone.View.extend({

        render: function() {
            var taskListView = new TaskList({
                model:{
                    job: this.model.job,
                    store: this.model.store,
                    incomplete_tasks: this.model.incomplete_tasks,
                    auth_token: window.bootstrap.auth_token
                }
            });

            this.$el.append(taskListView.render().el);

            return this;
        }
    });
});
