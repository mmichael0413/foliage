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
        moment = require('moment');

    return Backbone.View.extend({
        el: '.section',
        template: HandlebarsTemplates['procrastination/schedule/upcoming/visit_label'],

        initialize: function () {
            var self = this;
            this.scheduledCount = 0;
            this.unscheduledCount = 0;
            this.listView = this.$('.list');
            this.listButton = this.$('.list-view');
            this.calendarButton = this.$('.calendar-view');
            this.calendarView = this.$('.pure-g');
            this.list = new ListView({showComplete: false}).setElement('.scheduled .schedules');
            this.listenTo(this, 'fullcalendar.date.create', this.updateSchedule);
            this.listenTo(this, 'fullcalendar.refresh', this.refreshCalendar);

            this.aggregate = context.aggregateId;
            this.collection = new ScheduleCollection(null, {
                aggregateId: this.aggregate,
                personId: context.personId,
                programId: context.programId
            });

            this.calendar = this.$('#calendar').fullCalendar({
                // put your options and callbacks here
                droppable: true,
                eventLimit: 2,
                defaultDate: context.startDate,
                header: {
                    left: 'title',
                    center: '',
                    right: ''
                },
               // editable: true,
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
                            start: moment(model.get('dateScheduled')).format("YYYY-MM-DD"),
                            allDay: true,
                            className: model.get('taskColor'),
                            editable: model.get('dateCompleted') ? false : true
                        });
                    });

                    callback(events);
                },
                drop: function (date, event, object) {
                    var now = moment().utc().startOf('day');
                    if(date < now) {
                        alert("You cannot schedule a visit in the past.");
                        self.trigger('fullcalendar.refresh');
                    } else {
                        var id = $(object.helper.context).find('.visit').val();
                        self.trigger('fullcalendar.date.create', date, id);
                    }
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
                eventDrop: function(event, delta, revertFunc) {
                    var now = moment().utc().startOf('day');
                    if(event.start < now) {
                        alert("You cannot schedule a visit in the past.");
                        return revertFunc();
                    }

                    self.trigger('fullcalendar.date.create', event.start, event.id);
                },
                eventMouseout: function (calEvent, jsEvent) {
                    $(this).css('z-index', 8);
                    $('.tooltipevent').remove();
                },
                aspectRatio: 1
            });

            this.listenTo(this.collection, 'destroy', this.destroy);
            this.listenTo(this.list.collection, 'destroy', this.destroy);

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
            this.$('.schedule-container .scheduled .schedules').html('');

            this.groupedSchedules = this.collection.groupBy(function(schedule){
                return schedule.get('dateScheduled') !== null;
            });

            if(this.groupedSchedules.true !== undefined) {
                this.list.$el.html('');
                this.list.fetch();
            }

            if(this.groupedSchedules.false !== undefined) {
                this.unscheduledCount = this.groupedSchedules.false.length;

                _.each(this.groupedSchedules.false, function (model) {
                    self.renderModel(model);
                });
                $('.unscheduled .count').html(this.unscheduledCount);
            } else {
                $('.unscheduled .count').html('');
                this.$('.schedule-container .unscheduled .schedules').html('All visits have been scheduled. You can still update your schedule by dragging the visits on the calendar.');
            }

            this.refreshCalendar();

            return this;
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
            var model = this.collection.findWhere({id:id});
            if (model) {
                model.set('dateScheduled', date.format("MM/DD/YYYY"));
                model.save(model.attributes);
                this.refreshCalendar();
                this.render();
            }
        },

        destroy: function(model) {
            console.log(arguments);
            var m = this.collection.get(model.id);
            if(m) {
                console.log("found the model");
                this.collection.remove(m);
            }
            this.fetch();
        }

    });
});