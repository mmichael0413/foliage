define(function (require) {
    var Backbone = require('backbone'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        ControlView = {
            className: 'controls',

            template: HandlebarsTemplates['procrastination/schedule/upcoming/controls'],

            initialize: function(options){
                this.collection = options.collection;
                this.showButton = context.workflowStatus == 'Unlocked';

                this.listenTo(context, 'action.button.event', this.triggerWorkflowUpdate);

                return this;
            },

            events: {
                "click .set-schedule" : "setSchedule"
            },

            render: function(){
                this.$el.html(this.template({showButton: this.showButton}));

                return this;
            },

            setSchedule: function(e) {
                e.preventDefault();
                e.stopPropagation();

                var schedule = this.collection.find(function(schedule){
                    return schedule.get('dateScheduled') === null;
                });

                if(schedule === undefined) {
                    if(confirm('Are you sure your visits are scheduled correctly? Once your schedule has been marked as final you will need to contact your Program Manager to reschedule a visit.')) {
                        $.post(context.base_url + '/schedule/lock/' + context.aggregateId).done(function () {
                            location.reload();
                        }).fail(function () {

                        });
                    }
                } else {
                    alert('All visits must be scheduled before you can lock your schedule.');
                }
                //todo: post this and lock the schedule

            },

            triggerWorkflowUpdate: function(event) {
                $.post(context.base_url + '/schedule/unlock/' + context.aggregateId).done(function(){
                    location.reload();
                }).fail(function(){

                });
            }
        };

    return Backbone.View.extend(ControlView);

});