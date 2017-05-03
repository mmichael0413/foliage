define(function (require) {
        var Backbone = require('backbone'),
        FullCalendar = require('fullcalendar'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ListView = require('procrastination/views/schedule/current/main'),
        ScheduleCollection = require('procrastination/collections/schedule/upcoming/create_schedules'),
        StateMachine = require('state-machine'),
        StoreSchedule = require('procrastination/views/schedule/upcoming/show'),
        DetailsModal = require('procrastination/views/schedule/upcoming/details_modal'),
        context = require('context'),
        blockui = require('blockui'),
        jquery = require('jquery'),
        jqueryui = require('jquery-ui'),
        moment = require('moment');
    return Backbone.View.extend({
        el: '.main-content',
        initialize: function (options) {
            this.unlockButton = $('.unlock-button');
            this.unlockButton.click(this.unlockSchedule.bind(this));
            this.listenTo(context, 'blackoutdates:show', this.showInvalidDates);
            this.listenTo(context, 'blackoutdates:hide', this.hideInvalidDates);
            this.aggregate = options.aggregateId;
            this.collection = new ScheduleCollection(null, {
                aggregateId: this.aggregate,
                personId: context.personId,
                programId: context.programId
            });
            var self = this;
            this.calendar = this.$('#calendar').fullCalendar({
                defaultDate: context.startDate,
                height: 'auto',
                droppable: true,
                eventLimit: 4,
                header: {
                    left: null,
                    center: 'title',
                    right: null
                },
                events: function (start, end, timezone, callback) {
                    var events = [];
                    var scheduledVisits = self.collection.filter(function (model) {
                        var dateScheduled = model.get('dateScheduled');
                        return dateScheduled !== undefined && dateScheduled !== null;
                    });
                    _.each(scheduledVisits, function (model) {
                        events.push({
                            id: model.get('id'),
                            title: model.get('storeName'),
                            details: model.attributes,
                            start: model.get('dateScheduled'),
                            allDay: true,
                            className: model.get('jobColor'),
                            editable: model.get('dateCompleted') ? false : true
                        });
                    });
                    callback(events);
                },
                eventReceive: function (event) {
                    // Called when an unscheduled visit from the sidebar is dropped onto the calendar
                    self.updateSchedule(event.start, event.id, function(){ self.calendar.fullCalendar('removeEvents', event.id); });
                },
                eventDrop: function(event, delta, revertFunc, jsEvent, ui, view) {
                    // Called when a visit already on the calendar gets moved to another day
                    self.updateSchedule(event.start, event.id, revertFunc);
                },
                eventDragStart: function(event, jsEvent, ui, view) {
                    context.trigger('blackoutdates:show', event.id);
                },
                eventDragStop: function(event, jsEvent, ui, view) {
                    context.trigger('blackoutdates:hide');
                },
                eventClick: function (calEvent, jsEvent) {
                    new DetailsModal({model: calEvent.details}).render();
                },
                aspectRatio: 1
            });
            this.listenTo(this.collection, 'destroy', this.destroy);
            var initialState;
            this.fetch(function(){
                if(!context.isScheduleUnlocked){
                    initialState = 'finalized';
                } else if(this.groupedJobsByScheduled().unscheduled.length > 0){
                    initialState = 'unlocked';
                } else {
                    initialState = 'readyToFinalize';
                }
                this.fsm = StateMachine.create({
                    initial: { state: initialState, event: 'init', defer: true },
                    events: [
                        { name: 'unlock', from: 'finalized', to: 'readyToFinalize' },
                        { name: 'finalize', from: 'readyToFinalize', to: 'finalized' },
                        { name: 'schedulingComplete', from: 'unlocked', to: 'readyToFinalize' },
                    ],
                    callbacks: {
                        onfinalized: function(){
                            this.unlockButton.removeClass("hide");
                            this.render();
                        }.bind(this),
                        onreadyToFinalize: function(){
                            this.unlockButton.addClass("hide");
                            this.render();
                        }.bind(this),
                        onunlocked: function(){
                            this.unlockButton.addClass("hide");
                            this.render();
                        }.bind(this),
                    },
                });
                this.fsm.init();
            }.bind(this));
            return this;
        },
        render: function () {
            this.$('.schedule-container .unscheduled .schedules').html('');
            _.each(this.groupedJobsByScheduled().unscheduled, this.renderModel);
            this.$('.schedule-container .unscheduled .instructions').html(HandlebarsTemplates['procrastination/schedule/upcoming/instructions/' + this.fsm.current]());
            this.$('.finalize-button').click(this.finalizeSchedule.bind(this));
            return this;
        },
        fetch: function (callback) {
            this.collection.fetch().done(function (collection) {
                this.collection.generateLegend();
                if(callback){
                    callback();
                }
                this.calendar.fullCalendar('refetchEvents');
                this.$el.unblock();
            }.bind(this)).fail(function(e,a,b){
                alert("Your schedule could not be loaded due to a network error. Please try again.");
            }.bind(this));
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
        updateSchedule: function (date, id, revertFunc) {
            var model = this.collection.findWhere({id:id});
            date = moment.utc(date).format("YYYY-MM-DD");
            this.$el.block({message: null});
            model.set('dateScheduled', date);
            model.save(model.attributes, {wait: true}).done(function(jsonResponse){
                if(!jsonResponse.allow_schedule){
                    alert("You cannot make that scheduling change because " + jsonResponse.reason);
                    revertFunc();
                    this.$el.unblock();
                }
                this.fetch(function(){
                    if(this.fsm.is('unlocked') && this.groupedJobsByScheduled().unscheduled.length === 0){
                        this.fsm.schedulingComplete();
                    }
                    this.render();
                }.bind(this));
            }.bind(this)).fail(function(){
                revertFunc(); // need to reset calendar state to avoid making the user think it worked
                alert("Your schedule may not have been completed due to a network error. Please reload the page.");
                this.$el.unblock();
            }.bind(this));
        },
        showInvalidDates: function(id){
            $.getJSON(context.base_url + '/schedule/' + context.aggregateId + '/invalidSchedulingDates/' + id).done(function (dates) {
                _.each(dates, function(date){
                    var dateString = moment.utc(date).format("YYYY-MM-DD"); // format used in fullcalendar data-date
                    this.calendar.find(".fc-day[data-date=" + dateString + "]").addClass("blackout-date");
                }.bind(this));
                var model = this.collection.findWhere({id:id});
                // Endpoint doesn't check dates in the past, or outside of the cycle, so we mark them here
                this.calendar.find(".fc-past").add(".fc-other-month").addClass("blackout-date");
            }.bind(this));
        },
        hideInvalidDates: function(){
            this.calendar.find(".blackout-date").removeClass("blackout-date");
        },
        destroy: function(model) {
            var m = this.collection.get(model.id);
            if(m) {
                this.collection.remove(m);
                context.trigger('estimate:changed');
            }
            this.fetch(function(){this.render();}.bind(this));
        },
        groupedJobsByScheduled: function(){
            var grouped = this.collection.groupBy(function(schedule){
                return schedule.get('dateScheduled') !== null;
            });
            return {
                scheduled: grouped.true || [],
                unscheduled: grouped.false || [],
            };
        },
        finalizeSchedule: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.$el.block({message:null});
            if(confirm('Are you sure you want to finalize your schedule?')) {
                $.post(context.base_url + '/schedule/lock/' + context.aggregateId).done(function (response) {
                    var jsonResponse = JSON.parse(response);
                    if(jsonResponse){
                        this.fsm.finalize();
                    } else {
                        alert("Your schedule could not be finalized because you have unscheduled visits");
                    }
                }.bind(this)).fail(function () {
                    alert("Your schedule may not have been finalized due to a network error. Please reload the page.");
                }.bind(this)).always(function() {
                    this.$el.unblock();
                }.bind(this));
            } else {
                this.$el.unblock();
            }
        },
        unlockSchedule: function(e){
            e.preventDefault();
            e.stopPropagation();
            this.unlockButton.prop("disabled",true);
            this.$el.block({message:null});
            $.post(context.base_url + '/schedule/unlock/' + context.aggregateId).done(function () {
                this.fsm.unlock();
            }.bind(this)).fail(function () {
                alert("This schedule may not have been unlocked due to a network error. Please reload the page.");
            }.bind(this)).always(function() {
                this.$el.unblock();
                this.unlockButton.prop("disabled",false);
            }.bind(this));
        }
    });
});
