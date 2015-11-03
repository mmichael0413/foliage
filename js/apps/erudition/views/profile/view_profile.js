define(function(require){
	var Backbone = require('backbone'),
		context = require('context'),
		template = require('handlebarsTemplates');
        //BannerView = require('erudition/views/profile/banner');

	return Backbone.View.extend({
        el: '.content',
		template: template['erudition/profile/view'],
		initialize: function() {
            var self = this;

			this.person = context.content.person;

            var interestTemplates = context.content.interests;

            this.interests = [];

            _.each(this.person.interests, function(interest){
                self.interests.push(_.findWhere(interestTemplates, {name: interest}));
            });

			return this;
		},

		render: function() {
			//new BannerView({person: this.person}).render();
			this.$el.append(this.template({person:this.person, interests: this.interests, canEdit: context.content.canEdit}));
			return this;
		}
	});
});