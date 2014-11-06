define(function(require) {
    var _ = require('underscore'),
    	FilterableTableView = require('app/views/shared/filterable_table'),
        AsyncPagedCollection = require('app/collections/shared/async_paged'),
        Pageable = require('app/views/utils/pageable_component'),
    
    	/**
    	 *
    	 * @extends {module:app/views/shared/filterable_table}
    	 * @mixes module:app/views/utils/pageable_component
    	 * @exports app/views/store/list
    	 */
    	StoreListView = {
    		el: '#stores',
    		loadingHTML: "<div class='item'><i class='fa fa-spin fa-spinner'></i></div>",
        	collectionClass: AsyncPagedCollection,
        	bodySelector: '.body',
        	template: 'stores/rows',

        	afterRender: function () {   
        		this.renderPagination();
            }
    	};
	_.extend(StoreListView, Pageable);
	return FilterableTableView.extend(StoreListView);
});