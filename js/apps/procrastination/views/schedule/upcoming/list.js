define(function (require) {
        var Backbone = require('backbone'),
        FullCalendar = require('fullcalendar'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ListView = require('procrastination/views/schedule/current/main'),
        ScheduleCollection = require('procrastination/collections/schedule/upcoming/create_schedules'),
        StateMachine = require('state-machine'),
        StoreSchedule = require('procrastination/views/schedule/upcoming/show'),
        context = require('context'),
        blockui = require('blockui'),
        jquery = require('jquery'),
        jqueryui = require('jquery-ui'),
        moment = require('moment');
    return Backbone.View.extend({
        el: '.main-content',
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit_label'],
        initialize: function (options) {
            this.unlockButton = $('.unlock-button');
            this.unlockButton.click(this.unlockSchedule.bind(this));
            this.listenTo(context, 'blackoutdates:show', this.showBlackoutDates);
            this.listenTo(context, 'blackoutdates:hide', this.hideBlackoutDates);
            this.aggregate = options.aggregateId;
            this.collection = new ScheduleCollection(null, {
                aggregateId: this.aggregate,
                personId: context.personId,
                programId: context.programId
            });
            var self = this;
            this.calendar = this.$('#calendar').fullCalendar({
                defaultDate: context.startDate,
                droppable: true,
                eventLimit: 4,
                header: false,
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
                eventReceive: function (event) {
                    self.updateSchedule(event.start, event.id, function(){ self.calendar.fullCalendar('removeEvents', event.id); });
                },
                eventDrop: function(event, delta, revertFunc, jsEvent, ui, view){
                    // Called when a visit already on the calendar gets moved to another day
                    self.updateSchedule(event.start, event.id, revertFunc);
                },
                eventDragStart: function(event, jsEvent, ui, view) {
                    context.trigger('blackoutdates:show', event.id);
                },
                eventDragStop: function(event, jsEvent, ui, view) {
                    context.trigger('blackoutdates:hide');
                },
                eventMouseover: function (calEvent, jsEvent) {
                    self.$('.schedule-container .unscheduled .instructions').fadeTo(100,0.5);
                    self.$('.schedule-container .unscheduled .restrictions').fadeTo(100,0.5);
                    self.$('.tooltipevent').hide().html(calEvent.store).show('size', { origin: ["top", "left"] }, 200);
                },
                eventMouseout: function (calEvent, jsEvent) {
                    self.$('.schedule-container .unscheduled .instructions').fadeTo(100,1);
                    self.$('.schedule-container .unscheduled .restrictions').fadeTo(100,1);
                    self.$('.tooltipevent').hide('size', { origin: ["top", "left"] }, 200);
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
            this.renderLeftSide();
            this.refreshCalendar();
            return this;
        },
        refreshCalendar: function () {
            this.calendar.fullCalendar('refetchEvents');
        },
        fetch: function (callback) {
            this.collection.fetch().done(function (collection) {
                this.collection.generateLegend();
                if(callback){
                    callback();
                }
                this.$el.unblock();
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
                alert("Your schedule change could not be completed due to a network error. Please try again.");
                this.$el.unblock();
            }.bind(this));
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
        renderLeftSide: function(){
            this.$('.schedule-container .unscheduled .schedules').html('');
            _.each(this.groupedJobsByScheduled().unscheduled, function (model) {
                this.renderModel(model);
            }.bind(this));
            this.$('.schedule-container .unscheduled .instructions').html(HandlebarsTemplates['procrastination/schedule/upcoming/instructions/' + this.fsm.current]());
            this.$('.finalize-button').click(this.finalizeSchedule.bind(this));
            this.$('.schedule-container .unscheduled .restrictions').html(HandlebarsTemplates['procrastination/schedule/upcoming/instructions/restrictions'](context));
        },
        finalizeSchedule: function(e) {
            e.preventDefault();
            e.stopPropagation();
            this.$el.block({message:null});
            if(confirm('Are you sure you want to finalize your schedule?')) {
                $.post(context.base_url + '/schedule/lock/' + context.aggregateId).done(function () {
                    this.fsm.finalize();
                }.bind(this)).fail(function () {
                    alert("Your schedule could not be finalized due to a network error. Please try again.");
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
                alert("This schedule could not be unlocked due to a network error. Please try again.");
            }.bind(this)).always(function() {
                this.$el.unblock();
                this.unlockButton.prop("disabled",false);
            }.bind(this));
        }
    });
});
