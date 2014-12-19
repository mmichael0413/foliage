define(function (require) {
    var EntryRowView = require('pennyPacker/views/entry/row'),

        TravelView = {
            className: 'item entry travel',
            template: 'pennyPacker/entry/travel'

        };
    return EntryRowView.extend(TravelView);
});