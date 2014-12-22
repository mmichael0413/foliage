define(function(require) {

	var context = require('context'),
	
	FilterableComponent = {

		initFilterable: function () {
			// query execution event, the filter broadcasts the QueryString to use
            // for the active page
            this.listenTo(context, 'filter:query', this.applyFilter);
		},

		applyFilter: function (qs) {
            // set the Query String on the collection, then force it to reset
            // backbone will automatically trigger the redrawing of the
            // members
            this.$(this.bodySelector).html(this.loadingHTML);
            this.collection.setQueryString(qs);
            this.collection.fetch({reset:true});
        }

	};
	return FilterableComponent;
});