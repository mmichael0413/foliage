define(function (require) {
    var jquery = require('jquery'),
        Backbone = require('backbone'),
        jqueryui = require('jquery-ui'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context'),
        FullCalendar = require('fullcalendar'),
        ScheduleCollection = require('procrastination/collections/schedule/create_schedules'),
        StoreSchedule = require('procrastination/views/schedule/show_to_be_scheduled');

    return Backbone.View.extend({
        el: '.section',
        template: HandlebarsTemplates['procrastination/schedule/list'],

        initialize: function () {
            var self = this;
            this.scheduledCount = 0;
            this.unscheduledCount = 0;

            this.listenTo(this, 'fullcalendar.date.create', this.updateSchedule);

            this.aggregate = bootstrap.aggregateId;
            this.collection = new ScheduleCollection({
                aggregateId: this.aggregate,
                personId: bootstrap.personId,
                programId: bootstrap.programId
            });

            this.calendar = this.$('#calendar').fullCalendar({
                // put your options and callbacks here
                droppable: true,
                eventLimit: 2,
                defaultDate: bootstrap.startDate,
                header: {
                    left: 'title',
                    center: '',
                    right: ''
                },
                editable: true,
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
                            start: model.get('dateScheduled'),
                            allDay: true
                        });
                    });

                    callback(events);
                },
                drop: function (date, event, object) {
                    var id = $(object.helper.context).find('.visit').val();
                    self.trigger('fullcalendar.date.create', date, id);
                },
                eventMouseover: function (calEvent, jsEvent) {
                    var tooltip = '<div class="tooltipevent">' + calEvent.title + '</div>';
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
                eventDrop: function(event) {
                    self.trigger('fullcalendar.date.create', event.start, event.id);
                },
                eventMouseout: function (calEvent, jsEvent) {
                    $(this).css('z-index', 8);
                    $('.tooltipevent').remove();
                },
                aspectRatio: 1
            });

            return this;
        },
        events: {
            'click .save-schedule': 'saveSchedule'
        },
        render: function () {
            var self = this;
            // if collection has models, render them
            this.$('.schedule-container .unscheduled .schedules').html('');
            this.$('.schedule-container .scheduled .schedules').html('');

            var groupedSchedules = this.collection.groupBy(function(schedule){
                return schedule.get('dateScheduled') !== null;
            });

            if(groupedSchedules.true !== undefined) {
                this.scheduledCount = groupedSchedules.true.length;
                _.each(this.collection.models, function () {
                    self.renderModel.apply(self, groupedSchedules.true);
                });
            }
            $('.scheduled .count').html(this.scheduledCount);

            if(groupedSchedules.false !== undefined) {
                this.unscheduledCount = groupedSchedules.false.length;

                _.each(this.collection.models, function () {
                    self.renderModel.apply(self, groupedSchedules.false);
                });
            }
            $('.unscheduled .count').html(this.unscheduledCount);

            this.refreshCalendar();

            return this;
        },

        refreshCalendar: function () {
            this.calendar.fullCalendar('refetchEvents');
        },

        fetch: function () {
            var self = this;
            this.collection.fetch().done(function () {
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
        saveSchedule: function (e) {
            e.preventDefault();
            e.stopPropagation();

            if(this.unscheduledCount > 0) {
                console.log('Not all schedules have been completed.');
            } else {
                console.log('All visits have been scheduled');
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
        }
    });
});