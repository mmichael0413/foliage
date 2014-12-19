define(function (require) {
    var EntryRowView = require('pennyPacker/views/entry/row'),
        CheckinDetailsView = require('pennyPacker/views/entry/checkinDetails'),
        /**
         * Represents a Checkin Row
         * 
         * @type {View}
         * @exports 'pennyPacker/views/entry/checkin'
         */
        CheckinView = {
            className: 'item entry checkin',
            template: 'pennyPacker/entry/checkin',
            subViewClass: CheckinDetailsView
        };

    return EntryRowView.extend(CheckinView);
});