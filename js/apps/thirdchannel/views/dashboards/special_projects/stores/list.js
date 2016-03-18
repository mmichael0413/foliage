define(function(require) {
    var PageableListView = require('thirdchannel/views/shared/pageable_list'),

        StoreListView = PageableListView.extend({
            el: '#stores',
            template: 'thirdchannel/dashboards/special_projects/stores/rows'
        });
    return StoreListView;
});