define(function(require){
	var Backbone = require('backbone'),
		context = require('context'),
		template = require('handlebarsTemplates'),
        BannerView = require('erudition/views/profile/banner');

	return Backbone.View.extend({
        el: '.content',
		template: template['erudition/profile/view'],
		initialize: function() {
			this.person = context.content.person;
			return this;
		},

		render: function() {
			new BannerView({person: this.person}).render();
			this.$el.append(this.template({person:this.person}));
			return this;
		}
	});
});