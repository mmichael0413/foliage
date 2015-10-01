define(function (require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        context = require('context'),
        Pikaday = require('pikaday'),
        Templates = require('handlebarsTemplates'),
        SelectedStoresStore = require('oddjob/stores/selectedStores'),

        ScheduleEditView = {
            el: "#scheduleForm",
            events: {
                'click .submit': 'preSubmit',
                'submit'    : 'preSubmit'
            },

            initialize: function () {
                this.listenTo(context, 'stores:selected:count', this.updateCount);
                this.subViews = [];
            },

            render: function () {
                if (!context.hasOwnProperty('schedule')) {
                    console.error("Context does not have a 'schedule'!");
                    return this;
                }
                
                this.$el.find('.container').html(Templates['oddjob/schedule/row'](this.extractData()));
                this.configureDatepicker(this.$el.find(".datepicker.begin"));
                this.configureDatepicker(this.$el.find(".datepicker.end"));
                return this;
            },

            preSubmit: function (e) {
                this.$el.find("#storeUuidInput").val(SelectedStoresStore.uuids);
            },

            updateCount: function (count) {
                this.$el.find('#storeCount').text(count);
            },

            
            extractData: function () {
                var data = {};
                data.scheduleDates = context.meta.scheduleDates;
                // for each scheduleData, generate visitOptions
                data.scheduleDates.forEach(function(date) {
                    var visits = 0,
                        match = _.find(context.schedule.monthlyVisits, function (item) { return item.month == date.month && item.year == date.year;});
                    if (match) {
                        visits = match.visits;
                    }
                    date.visitOptions = this._selectFrequency(context.visitOptions, visits);
                }.bind(this));

                return data;
            },
            _selectFrequency: function (visitOptions, visits) {
                // for each visitOption, we need to look and see if the schedule has a matching visit for the date
                var data = [];
                visitOptions.forEach(function (option) {
                    data.push({selected: option == visits, key: option});
                });
                return data;
            },
            configureDatepicker: function ($input) {
                var self = this,
                    datepicker = new Pikaday({field: $input[0],
                         position: "bottom right",
                     });
                self.$el.find('.pika-single').addClass('col-1-1');
            }
    };

    return Backbone.View.extend(ScheduleEditView);
});