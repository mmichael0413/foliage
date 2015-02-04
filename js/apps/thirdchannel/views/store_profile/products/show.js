define(function(require) {

    var AsyncListView = require('shared/views/async_list'),
        Pageable = require('shared/views/utils/pageable_component'),
        AsyncPagedCollection = require('thirdchannel/collections/shared/async_paged');

    /**
     *
     * The Stores list
     *
     * @extends {module:thirdchannel/views/shared/async_list}
     * @exports thirdchannel/views/stores/category
     */
    ProductListView = {
        el: '#category',
        rowTemplate: 'thirdchannel/store_profile/products/show',
        collectionClass: AsyncPagedCollection
    };

    _.extend(ProductListView, Pageable);
    return AsyncListView.extend(ProductListView);
});