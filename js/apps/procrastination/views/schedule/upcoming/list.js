define(function (require) {
        var Backbone = require('backbone'),
        ControlsView = require('procrastination/views/schedule/upcoming/controls'),
        FullCalendar = require('fullcalendar'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ListView = require('procrastination/views/schedule/current/main'),
        ScheduleCollection = require('procrastination/collections/schedule/upcoming/create_schedules'),
        StateMachine = require('state-machine'),
        StoreSchedule = require('procrastination/views/schedule/upcoming/show'),
        context = require('context'),
        jquery = require('jquery'),
        jqueryui = require('jquery-ui'),
        moment = require('moment');

    return Backbone.View.extend({
        el: '.main-content',
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit_label'],

        initialize: function (options) {
            var self = this;
            var initialState;
            if(finalized){
                initialState = 'finalized';
            } else if(this.groupSchedules().unscheduled.length){
                initialState = 'unlocked';
            } else {
                initialState = 'readyToFinalize';
            }
            this.fsm = StateMachine.create({
                initial: initialState,
                events: [
                    { name: 'unlock', from: 'finalized', to: 'unlocked' },
                    { name: 'finalize', from: 'readyToFinalize', to: 'finalized' },
                    { name: 'schedulingComplete', from: 'unlocked', to: 'readyToFinalize' },
                ],
                callbacks: {
                    onenterstate: this.render,
                },
            });
            this.listenTo(this, 'fullcalendar.date.create', this.updateSchedule);
            this.listenTo(this, 'fullcalendar.refresh', this.refreshCalendar);
            this.listenTo(context, 'blackoutdates:show', this.showBlackoutDates);
            this.listenTo(context, 'blackoutdates:hide', this.hideBlackoutDates);

            this.aggregate = options.aggregateId;
            this.collection = new ScheduleCollection(null, {
                aggregateId: this.aggregate,
                personId: context.personId,
                programId: context.programId
            });

            this.calendar = this.$('#calendar').fullCalendar({
                droppable: context.isScheduleUnlocked,
                eventLimit: 2,
                defaultDate: context.startDate,
                header: {
                    left: 'title',
                    center: '',
                    right: ''
                },
                events: function (start, end, timezone, callback) {
                    var events = [];
                    var scheduledVisits = self.collection.filter(function (model) {
                        var dateScheduled = model.get('dateScheduled');
                        return dateScheduled !== undefined && dateScheduled !== null;
                    });
                    _.each(scheduledVisits, function (model) {
                        var label = self.template(model.attributes);

                        events.push({
                            id: model.get('id'),
                            title: model.get('storeName'),
                            store: label,
                            start: model.get('dateScheduled'),
                            allDay: true,
                            className: model.get('jobColor'),
                            editable: model.get('dateCompleted') ? false : true
                        });
                    });

                    callback(events);
                },
                drop: function (date, event, object) {
                    // Called when a visit on the left sidebar gets dropped onto the calendar
                    var id = $(object.helper.context).find('.visit').val();
                    self.trigger('fullcalendar.date.create', date, id);
                },
                eventDrop: function(event, delta, revertFunc) {
                    // Called when a visit already on the calendar gets moved to another day
                    self.trigger('fullcalendar.date.create', event.start, event.id);
                },
                eventDragStart: function(event, jsEvent, ui, view) {
                    context.trigger('blackoutdates:show', event.id);
                },
                eventDragStop: function(event, jsEvent, ui, view) {
                    context.trigger('blackoutdates:hide');
                },
                eventMouseover: function (calEvent, jsEvent) {
                    var tooltip = '<div class="tooltipevent">' + calEvent.store + '</div>';
                    $("body").append(tooltip);
                    $(this).mouseover(function (e) {
                        $(this).css('z-index', 10000);
                        $('.tooltipevent').fadeIn('500');
                        $('.tooltipevent').fadeTo('10', 1.9);
                    }).mousemove(function (e) {
                        $('.tooltipevent').css('top', e.pageY + 10);
                        $('.tooltipevent').css('left', e.pageX + 20);
                    });
                },
                eventMouseout: function (calEvent, jsEvent) {
                    $(this).css('z-index', 8);
                    $('.tooltipevent').remove();
                },
                aspectRatio: 1
            });

            this.listenTo(this.collection, 'destroy', this.destroy);
            return this;
        },
        events: {
        },
        render: function () {
            var self = this;
            if(this.collection.models.length === 0) {
                this.$('.schedule-container .unscheduled .schedules').html('No visits are required for this month.');
                return this;
            }

            this.$('.schedule-container .unscheduled .schedules').html('');

                this.unscheduledCount = this.groupedSchedules.false.length;
                _.each(this.groupedSchedules.false, function (model) {
                    self.renderModel(model);
                });
                $('.unscheduled .count').html(this.unscheduledCount);
            } else {
                $('.unscheduled .count').html('');
                this.$('.schedule-container .unscheduled .schedules').html(HandlebarsTemplates['procrastination/schedule/upcoming/info']({isScheduleUnlocked: context.isScheduleUnlocked}));
            }

            this.refreshCalendar();

            return this;
        },

        refreshCalendar: function () {
            console.log("refresh");
            this.calendar.fullCalendar('refetchEvents');
        },

        fetch: function () {
            var self = this;
            this.collection.fetch().done(function (collection) {
                self.collection.generateLegend();
                self.render();
            });
        },

        renderModel: function (model) {
            var storeSchedule = new StoreSchedule({
                model: model
            });

            if(model.get('dateScheduled') === null) {
                this.$('.schedule-container .unscheduled .schedules').append(storeSchedule.render().el);
            } else {
                this.$('.schedule-container .scheduled .schedules').append(storeSchedule.render().el);
            }

        },

        updateSchedule: function (date, id) {
            var self = this;
            var model = this.collection.findWhere({id:id});
            date = moment.utc(date).format("YYYY-MM-DD");
            model.set('dateScheduled', date);
            model.save(model.attributes, {wait: true}).done(function(jsonResponse){
                if(!jsonResponse.allow_schedule){
                    console.log(jsonResponse.reason);
                }
                self.fetch();
            }).fail(function(){
                console.log("Failed to connect to server");
                // need to reset calendar state to avoid making the user think it worked
                self.refreshCalendar(); // this doesn't work!
            });
        },
        showBlackoutDates: function(id){
            var model = this.collection.findWhere({id:id});
            var dates = model.attributes.jobDetails.blackoutDates;
            _.chain(dates).map(function(date){
                return moment.utc(date).format("YYYY-MM-DD"); // format used in fullcalendar data-date
            }).each(function(dateString){
                $("#calendar").find(".fc-day[data-date=" + dateString + "]").addClass("blackout-date");
            });
        },
        hideBlackoutDates: function(){
            $("#calendar").find(".blackout-date").removeClass("blackout-date");
        },
        destroy: function(model) {
            var m = this.collection.get(model.id);
            if(m) {
                this.collection.remove(m);
                context.trigger('estimate:changed');
            }
            this.fetch();
        },
        groupSchedules: function(){
            var grouped = this.collection.groupBy(function(schedule){
                return schedule.get('dateScheduled') !== null;
            });
            return {
                scheduled: grouped.true || [],
                unscheduled: grouped.false || [],
            }
        },
        renderLeftSide: function(){
/*
            p(class: 'section', 'To schedule your visit, drag the selected store to the date on the calendar. You can reschedule a visit by ' +
                    'dragging the store from the original list to a new date, or by dragging the event on the calendar ' +
                    'to a new date.')
*/
            if(this.fsm.is("unlocked")){
                this.$('.schedule-container .unscheduled .schedules').html('');
            } else if(this.fsm.is("readyToFinalize")){
            } else {
            }
        },
    });
});
