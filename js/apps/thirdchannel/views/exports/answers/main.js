define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DateTimePicker = require('dateTimePicker'),
        Serialize = require('serializeObject'),
        context = require('context'),
        ExportModel = require('thirdchannel/models/exports/answers');

    return Backbone.View.extend({
        el: '#answers-export-form',

        events: {
            'submit': 'initiateExport'
        },

        render: function() {
            this.$('#start_date, #end_date').datetimepicker({
                timepicker:false,
                format:'m/d/Y',
                closeOnDateSelect: true
            });

            return this;
        },

        initiateExport: function(e) {
            e.preventDefault();
            var model = new ExportModel(_.extend(this.$el.serializeObject(), {programId: context.programId}));

        }
    });
});