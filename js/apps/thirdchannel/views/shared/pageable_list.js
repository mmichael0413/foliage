define(function(require) {
    var _ = require('underscore'),
        FilterableTableView = require('thirdchannel/views/shared/filterable_table'),
        AsyncPagedCollection = require('thirdchannel/collections/shared/async_paged'),
        Pageable = require('shared/views/utils/pageable_component'),
    
        /**
         * A Base View that supports async Paging and renders out in a non-table based
         * filterable List.
         * 
         * @extends {module:thirdchannel/views/shared/filterable_table}
         * @mixes module:shared/views/utils/pageable_component
         * @exports thirdchannel/views/shared/pageable_list
         */
        PageableListView = {
            loadingHTML: "<div class='item'><i class='fa fa-spin fa-spinner'></i></div>",
            collectionClass: AsyncPagedCollection,
            bodySelector: '.body',
            template: '',

            afterRender: function () {   
                this.renderPagination();
            }
        };
    _.extend(PageableListView, Pageable);
    return FilterableTableView.extend(PageableListView);
});