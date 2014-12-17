define(function(require) {
	var PaginationView = require('thirdchannel/views/utils/pagination'),
	
	/**
	 * Acts as an implementation wrapper for the Pagination View
	 *
	 * 
	 * @mixin
	 * @exports shared/views/utils/pageable_component
	 */
	PageableComponent = {
		renderPagination: function () {
			if (this.pager) {
                    this.stopListening(this.pager);
                    this.pager.remove();
                    delete this.pager;
                    // need to re-add the target for the pager. 
                    this.$el.prepend("<div class='pagination-holder'></div>");    
                }
                var $paginationHolder = this.$el.find('.pagination-holder');
                if ($paginationHolder.length > 0) {
                    this.pager = new PaginationView(this.collection.pages !== undefined ? this.collection.pages : this.pages).render();
                    // replace the existing pagination holder with the pager. If we simply prepended the pager into the view, there would be a 
                    // jumping effect as the element is removed, reflowed, then added again.
                    // it's a bit tedius, certainly, but the effect is nice.
                    $paginationHolder.replaceWith(this.pager.$el);
                    this.listenTo(this.pager, 'new_page', this.pageChange);    
                }
		},
		renderCollection: function (data) {
            this.count = data.pages.totalCount;
            this.pages = data.pages;
            this.collection.reset(data.items);
        },
        pageChange: function (page) {
            this.collection.page = page;
            this.collection.fetch({reset:true});
        },
	};

	return PageableComponent;

});