define(function (require) {
    var jquery = require('jquery'),
        Backbone = require('backbone'),
        jqueryui = require('jquery-ui'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        FullCalendar = require('fullcalendar'),
        ScheduleCollection = require('procrastination/collections/schedule/upcoming/create_schedules'),
        StoreSchedule = require('procrastination/views/schedule/upcoming/show'),
        ListView = require('procrastination/views/schedule/current/main'),
        ControlsView = require('procrastination/views/schedule/upcoming/controls'),
        moment = require('moment');

    return Backbone.View.extend({
        el: '.main-content',
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit_label'],

        initialize: function (options) {
            var self = this;
            this.unscheduledCount = 0;
            //this.list = new ListView({aggregateId: options.aggregateId, showComplete: false}).setElement('.scheduled .schedules');
            this.listenTo(this, 'fullcalendar.date.create', this.updateSchedule);
            this.listenTo(this, 'fullcalendar.refresh', this.refreshCalendar);
            //this.listenTo(context, 'blackoutdates:show', this.showBlackoutDates);
            //this.listenTo(context, 'blackoutdates:hide', this.hideBlackoutDates);

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
           // this.listenTo(this.list.collection, 'destroy', this.destroy);
            this.renderControls();
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

            // if collection has models, render them
            this.$('.schedule-container .unscheduled .schedules').html('');
           // this.$('.schedule-container .scheduled .schedules').html('');

            this.groupedSchedules = this.collection.groupBy(function(schedule){
                return schedule.get('dateScheduled') !== null;
            });

            // if(this.groupedSchedules.true !== undefined) {
            //     this.list.$el.html('');
            //     this.list.fetch();
            // }

            if(this.groupedSchedules.false !== undefined) {
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

        renderControls: function() {
            var controls = new ControlsView({collection: this.collection});

            this.$el.append(controls.render().el);
        },

        refreshCalendar: function () {
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
            var now = moment.utc().startOf('day');
            if(!context.isScheduleUnlocked) {
                self.trigger('fullcalendar.refresh');
                alert("Your schedule is locked. Please contact your Program Manager if you need to reschedule a visit.");
            } else if(date < now) {
                self.trigger('fullcalendar.refresh');
                alert("You cannot schedule a visit in the past.");
            } else if (model) {
                date = moment.utc(date).format("YYYY-MM-DD");
                /*var blackouts = _.chain(model.attributes.jobDetails.blackoutDates).map(function(dateString){
                    return moment.utc(dateString).format("YYYY-MM-DD");
                });
                if(blackouts.contains(date).value()) {
                    self.trigger('fullcalendar.refresh');
                    alert("That job cannot be scheduled for " + now.format("l") + ". A blackout exists for that job on that date.");
                } else {*/
                    model.set('dateScheduled', date);
                    model.save(model.attributes).done(function() {
                        self.refreshCalendar();
                        self.render();
                    });
                //}
            }
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
        }

    });
});
