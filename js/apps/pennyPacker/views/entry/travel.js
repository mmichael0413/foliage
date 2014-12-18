define(function (require) {
	var Backbone = require("backbone"),
		Templates = require('handlebarsTemplates'),

		TravelView = {
			className: 'item travel',

            render: function () {
                this.$el.html(Templates['pennyPacker/entry/travel'](this.model.toJSON()));
                return this;
            }
		};
	return Backbone.View.extend(TravelView);
});