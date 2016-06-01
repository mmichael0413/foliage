define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Templates = require('handlebarsTemplates'),
        TaskRowView = require('oddjob/views/tasks/row');
    var JobRowView = Backbone.View.extend({

        className: 'job section',
        jobViews: [],

        render: function () {
            var data = this.model.toJSON();
            data.taskCount = data.tasks.length;
            data.displayTotalPayment = data.totalPayment/100;

            data.createScheduleUrl = context.links.base +"/" + this.model.get('id') +"/schedule";
            data.editUrl = context.links.base +"/" + this.model.get('id');
            if (data.role === "") {
                data.role = undefined;
            }
            // render my self
            data.scheduleDates = context.meta.scheduleDates;
            this.$el.html(Templates['oddjob/jobs/row'](data));
            // render my rows
            this.renderRows(new Backbone.Collection(this.model.get('tasks')));
            return this;
        },

        renderRows: function (collection) {
            var $tasksContainer = this.$el.find('.tasks-container');
            var $frequenciesContainer = this.$el.find('.frequencies-container');
            var $blackoutSchemesContainer = this.$el.find('.blackout-schemes-container');
            var $allowReschedulingContainer = this.$el.find('.allow-rescheduling-container');
            //JV
            $tasksContainer.hide();
            $frequenciesContainer.hide();
            $blackoutSchemesContainer.hide();
            $allowReschedulingContainer.hide();

            //Add header to top of list only once
            $($tasksContainer).html(Templates['oddjob/tasks/header']);

            collection.each(function (job) {
                var view = new TaskRowView({model: job});
                view.render().$el.appendTo($tasksContainer);
                this.jobViews.push(view);
            }.bind(this));
        }
    });
    return JobRowView;
});
