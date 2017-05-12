define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        DetailsModal = require('procrastination/views/schedule/upcoming/details_modal'),
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
            "click .remove" : "remove",
            "click .task-count": "toggleTaskList",
            "click .decline": "declineRequest",
            "click": "showDetails"
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
                    context.trigger('blackoutdates:show', $(object.helper.context).find('.visit').val());
                },
                stop: function(event, object) {
                    $(event.target).removeClass('drag-active');
                    context.trigger('blackoutdates:hide');
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
            if(confirm('This operation cannot be undone. Are you sure you want to unassign this visit?')) {
                this.model.destroy({wait: true, data: {id: this.model.id, remove: false, aggregateId: context.aggregateId}});
            }
        },

        remove: function(e){
            e.preventDefault();
            e.stopPropagation();
            if(confirm('This operation cannot be undone. Are you sure you want to remove this visit?')) {
                this.model.destroy({wait: true, data: {id: this.model.id, remove: true, aggregateId: context.aggregateId}});
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
        },

        showDetails: function(e) {
            e.preventDefault();
            e.stopPropagation();
            new DetailsModal({model: this.model.attributes}).render();
        },

        declineRequest: function(e) {
            e.preventDefault();
            e.stopPropagation();
            if(confirm("Are you sure you want to decline request?")) {
                var data = {
                    aggregateId: context.aggregateId,
                    scheduledVisitId: this.model.id,
                    jobId: this.model.get('jobId'),
                    personId: this.model.get('personId'),
                    programStoreId: this.model.get('programStoreUUID')
                };

                var request = $.ajax({
                    url: context.base_url + '/schedule/decline',
                    method: 'POST',
                    dataType: 'json',
                    contentType: 'application/json; charset=UTF-8',
                    data: JSON.stringify(data)
                });

                // On success, remove the job request from the list
                request.then(function() { this.remove(); }.bind(this));

                request.fail(function(response) {
                    console.error(response);
                    alert('Failed to decline request. Please try again later.');
                }.bind(this));
            }
        }
    });

    return ScheduleView;
});
