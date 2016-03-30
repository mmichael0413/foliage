define(function(require) {
    var _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        Serialize = require('serializeObject'),
        context = require('context'),
        BaseExportView = require('thirdchannel/views/exports/base'),
        ExportModel = require('thirdchannel/models/exports/sales_stores_audit'),
        ExportModal = require('thirdchannel/modals/export');

    return BaseExportView.extend({
        el: '#sales-stores-audit-export-form',

        initialize: function() {
            this.model = new ExportModel();
        }
    });
});