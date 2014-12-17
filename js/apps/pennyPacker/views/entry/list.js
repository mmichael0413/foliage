define(function(require){
var PageableListView = require('thirdchannel/views/shared/pageable_list'),
        /**
         *
         * The Entries list list
         * 
         * @extends {module:thirdchannel/views/shared/pageable_list}
         * @exports pennyPacker/views/entry/list
         */
        EntryListView = PageableListView.extend({
            el: '#entries',
            template: 'thirdchannel/stores/rows',
        });
    return EntryListView;
});