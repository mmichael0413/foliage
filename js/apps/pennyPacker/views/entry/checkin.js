define(function (require) {
    var EntryRowView = require('pennyPacker/views/entry/row'),
        /**
         * Represents a Checkin Row
         * 
         * @type {View}
         * @exports 'pennyPacker/views/entry/checkin'
         */
        CheckinView = {
            className: 'item entry checkin',
            template: 'pennyPacker/entry/checkin',
            // events: function () {
            //     console.log('setting events');
            //     return {
            //         'click': function () {
            //             console.log("yay");
            //         }
            //     };
            // }
        };

    return EntryRowView.extend(CheckinView);
});