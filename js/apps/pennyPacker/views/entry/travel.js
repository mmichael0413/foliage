define(function (require) {
    var EntryRowView = require('pennyPacker/views/entry/row'),
    	TravelDetailsView = require('pennyPacker/views/entry/travelDetails'),

        TravelView = {
            className: 'item entry travel',
            template: 'pennyPacker/entry/travel',
            subViewClass: TravelDetailsView

        };
    return EntryRowView.extend(TravelView);
});