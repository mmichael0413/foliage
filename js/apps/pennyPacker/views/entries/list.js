define(function(require){
var AsyncListView = require('shared/views/async_list'),
    EntriesCollection = require('pennyPacker/collections/entries'),
        /**
         *
         * The Entries list list
         * 
         * @extends {module:shared/views/async_list}
         * @exports pennyPacker/views/entries/list
         */
        EntryListView = AsyncListView.extend({
            el: '#entries',
            rowTemplate: 'pennyPacker/entries/row',
            collectionClass: EntriesCollection
        });
    return EntryListView;
});