define(function(require) {
    var PageableListView = require('app/views/shared/pageable_list'),
        /**
         *
         * The Stores list
         * 
         * @extends {module:app/views/shared/pageable_list}
         * @exports app/views/stores/list
         */
        StoreListView = PageableListView.extend({
            el: '#stores',
            template: 'stores/rows',
        });
    return StoreListView;
});