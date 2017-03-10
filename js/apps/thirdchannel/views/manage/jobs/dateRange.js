define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DateTimePicker = require('dateTimePicker'),
        context = require('context');

    var dtPickerOptions = {
        timepicker: false,
        format: 'Y-m-d',
        closeOnDateSelect: true,
        scrollInput: false
    };

    var StoreItem = Backbone.View.extend({
        className: 'pure-g date-range-item',

        template: HandlebarsTemplates['thirdchannel/manage/jobs/range'],

        events: {
            'click .date-range-remove-link': 'handleRemove',
            'change .start': 'handleStartChange',
            'change .end': 'handleEndChange'
        },

        render: function() {
            var self = this;

            this.$el.html(this.template(this.model.attributes));
            this.$start = this.$('.start').datetimepicker({
                timepicker: false,
                format: 'Y-m-d',
                closeOnDateSelect: true,
                scrollInput: false,
                onShow: function(ct) {
                    var end = self.$('.end').val();
                    this.setOptions({
                        maxDate: end ? end : false
                    });
                }
            });
            this.$end = this.$('.end').datetimepicker({
                timepicker: false,
                format: 'Y-m-d',
                closeOnDateSelect: true,
                scrollInput: false,
                onShow: function(ct) {
                    var start = self.$('.start').val();
                    this.setOptions({
                        minDate: start ? start : false
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