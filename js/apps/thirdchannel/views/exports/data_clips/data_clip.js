define(function(require) {
    var _ = require('underscore'),
        context = require('context'),
        BaseExportView = require('thirdchannel/views/exports/base'),
        ExportModel = require('thirdchannel/models/exports/data_clip');

    return BaseExportView.extend({
        el: 'form',

        initialize: function(options) {
            this.setElement(options);
            this.model = new ExportModel();
        }
    });
});