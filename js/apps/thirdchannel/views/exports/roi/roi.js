define(function (require) {
    var ExportBaseView = require('thirdchannel/views/exports/base'),
        ExportModel = require('thirdchannel/models/exports/roi');

    return ExportBaseView.extend({
        el: '.roi-control',
        model: new ExportModel()
    });

});