define(function(require) {
    var PageableListView = require('thirdchannel/views/shared/pageable_list'),
        /**
         *
         * The Stores list
         * 
         * @extends {module:thirdchannel/views/shared/pageable_list}
         * @exports thirdchannel/views/stores/list
         */
        StoreListView = PageableListView.extend({
            el: '#stores',
            template: 'thirdchannel/stores/rows',
        });
    return StoreListView;
});