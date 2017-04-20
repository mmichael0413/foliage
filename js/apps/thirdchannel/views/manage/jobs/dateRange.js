define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DateTimePicker = require('dateTimePicker'),
        moment = require('moment'),
        context = require('context');

    var StoreItem = Backbone.View.extend({
        className: 'pure-g date-range-item',

        template: HandlebarsTemplates['thirdchannel/manage/jobs/range'],

        events: {
            'click .date-range-remove-link': 'handleRemove',
            'change .start': 'handleStartChange',
            'change .end': 'handleEndChange'
        },

        initialize: function(options) {
            this.isAdmin = options.isAdmin;
        },

        render: function() {
            var self = this;

            var nextMonth = moment().add(1, 'month');
            var startDate = moment();

            if(!this.isAdmin) {
                startDate = startDate.add(4, 'week');
            }
            startDate = startDate.format('YYYY-MM-DD');

            var maxDate = moment([nextMonth.year(), nextMonth.month()]).add(2, 'month').endOf('month').format('YYYY-MM-DD');

            this.$el.html(this.template(this.model.attributes));
            this.$start = this.$('.start').datetimepicker({
                timepicker: false,
                format: 'Y-m-d',
                closeOnDateSelect: true,
                scrollInput: false,
                startDate: startDate,
                minDate: startDate,
                onShow: function(ct) {
                    var end = self.$('.end').val();
                    this.setOptions({
                        maxDate: end ? end : maxDate
                    });
                }
            });
            this.$end = this.$('.end').datetimepicker({
                timepicker: false,
                format: 'Y-m-d',
                closeOnDateSelect: true,
                scrollInput: false,
                startDate: startDate,
                maxDate: maxDate,
                onShow: function(ct) {
                    var start = self.$('.start').val();
                    this.setOptions({
                        minDate: start ? start : startDate
                    });
                }
            });
            return this;
        },

        handleRemove: function(e) {
            e.preventDefault();

            if(confirm("Are you sure you want to remove this date range?")) {
                this.model.collection.remove(this.model);
                this.remove();
            }
        },

        handleStartChange: function(e) {
            this.model.set('start', this.$start.val());
        },

        handleEndChange: function(e) {
            this.model.set('end', this.$end.val());
        }
    });

    return StoreItem;
});