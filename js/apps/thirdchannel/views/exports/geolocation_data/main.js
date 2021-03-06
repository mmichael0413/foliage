define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        DateTimePicker = require('dateTimePicker'),
        Serialize = require('serializeObject'),
        context = require('context'),
        BaseExportView = require('thirdchannel/views/exports/base'),
        ExportModel = require('thirdchannel/models/exports/geolocation_data'),
        ExportModal = require('thirdchannel/modals/export');

    var dtPickerOptions = {
        timepicker: false,
        format: 'Y-m-d',
        closeOnDateSelect: true,
        scrollInput: false
    };

    return BaseExportView.extend({
        el: '#geolocation-data-export-form',

        initialize: function() {
            this.model = new ExportModel();
            this.$('#start_date').datetimepicker(dtPickerOptions);
            this.$('#end_date').datetimepicker(dtPickerOptions);
        }
    });
});