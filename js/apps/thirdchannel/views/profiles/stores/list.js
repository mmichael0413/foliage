define(function(require) {
    var context = require('context'),
        PageableListView = require('thirdchannel/views/shared/pageable_list'),
        StoreListView = PageableListView.extend({
            el: '#stores',
            template: 'thirdchannel/profiles/stores/rows',
            pageChange: function (page) {
                context.trigger('filter:query', "page=" + page);
            }
        });
    return StoreListView;
});