define(function(require){
var AsyncListView = require('shared/views/async_list'),
    EntriesCollection = require('pennyPacker/collections/entries'),
    CheckinView = require('pennyPacker/views/entry/checkin'),
    TravelView = require('pennyPacker/views/entry/travel'),
        /**
         *
         * The Entries list list
         * 
         * @extends {module:shared/views/async_list}
         * @exports pennyPacker/views/entries/list
         */
        EntryListView = AsyncListView.extend({
            el: '#entries',
            rowView: function(options) {
                var type = options.model.get('type'),
                    view = CheckinView;

                if (type == "CHECKIN") {
                }
                else if (type == "TRAVEL") {
                    view = TravelView;
                } else {
                    console.error("Model has unknown type of " + type);
                }
                return new view(options);
            },
            collectionClass: EntriesCollection
        });
    return EntryListView;
});