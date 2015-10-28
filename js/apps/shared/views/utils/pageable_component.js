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

                if(this.$('.pagination-holder').length === 0) {
                    this.$el.prepend("<div class='pagination-holder'></div>");
                } else {
                    $("<div class='pagination-holder'></div>").insertAfter(this.pager.$el);    
                }
                // need to re-add the target for the pager. 
                this.clearPager();
            }
            var $paginationHolder = this.$('.pagination-holder');
            if ($paginationHolder.length > 0) {
                this.pager = new PaginationView(this.collection.pages !== undefined ? this.collection.pages : this.pages).render();
                // replace the existing pagination holder with the pager. If we simply prepended the pager into the view, there would be a 
                // jumping effect as the element is removed, reflowed, then added again.
                // it's a bit tedius, certainly, but the effect is nice.
                $paginationHolder.replaceWith(this.pager.$el);
                this.listenTo(this.pager, 'new_page', this.pageChange);
            }
		},
        /**
         * Looks for .items and .pages
         * 
         */
		bootstrapCollection: function (data) {
            this.count = data.pages.totalCount;
            this.pages = data.pages;
            this.collection.reset(data.items);
        },
        clearPager: function () {
            this.stopListening(this.pager);
            this.pager.remove();
            delete this.pager;            
        }
        
	};

	return PageableComponent;

});