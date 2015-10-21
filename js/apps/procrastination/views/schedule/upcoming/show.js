define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        HandlebarsTemplates = require('handlebarsTemplates');

    ScheduleView = Backbone.View.extend({
        className: 'item pure-g',
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit'],
        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },
        events: {
            "change input": "updateScheduledDate",
            "click .unassign" : "unassign",
            "click .task-count": "toggleTaskList"
        },
        render: function () {
            var data = this.model.toJSON();
            data.taskCount = data.tasks.length;
            data.hidden = 'hidden';
            this.$el.html(this.template(data));

            this.$el.data('event', {
                id: this.model.get('id'),
                title: this.model.get('storeName'),
                className: this.model.get('jobColor')
            });

            this.$el.draggable({
                helper: "clone",
                revert: true,
                revertDuration: 0,
                start: function (event, object) {
                    $(event.target).addClass('drag-active');
                },
                stop: function(event, object) {
                    $(event.target).removeClass('drag-active');
                }
            });
            this.$el.addClass(this.model.get('jobColor'));

            return this;
        },
        updateScheduledDate: function (e) {
            e.preventDefault();
            e.stopPropagation();

            this.model.set('dateScheduled', $(e.target).val());

            if (this.model.get('dateScheduled') !== undefined) {
                if (this.model.hasChanged('dateScheduled')) {
                    this.model.save(this.model.attributes);
                }
            }
        },
        unassign: function(e){
            e.preventDefault();
            e.stopPropagation();
            if(confirm('This operation cannot be undone. Are you sure you want to remove this visit?')) {
                this.model.destroy({wait: true, data: {id: this.model.id, aggregateId: context.aggregateId}});
            }
        },

        toggleTaskList: function (e) {
            e.preventDefault();
            e.stopPropagation();
            var $taskList = this.$el.find(".additional-content"),
                visible = $taskList.is(':visible');
            if (visible) {
                $taskList.hide();
            } else {
                $taskList.show();
            }
        }
    });

    return ScheduleView;
});