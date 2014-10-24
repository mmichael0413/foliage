define(function (require) {
	var Backbone = require('backbone'),
		$ = require('jquery');

	/**
	 * 
	 * @exports app/views/utils/expandWrapperView
	 */
	var ExpandWrapperView = {
		events: {
			'click .click-target': 'expand'
		},
		expand: function (e) {
			e.stopPropagation();
			e.preventDefault();
			var $target = $(e.currentTarget),
				$container = $target.parents('.expand-container');
			$container.toggleClass('active');
		}
	};
	return Backbone.View.extend(ExpandWrapperView);

});