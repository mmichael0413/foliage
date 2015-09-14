define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DateTimePicker = require('dateTimePicker'),
        context = require('context');

    return Backbone.View.extend({
        el: '#answers-export-form',

        render: function() {
            this.$('#start_date, #end_date').datetimepicker({
                timepicker:false,
                format:'m/d/Y',
                closeOnDateSelect: true
            });

            return this;
        }
    });
});