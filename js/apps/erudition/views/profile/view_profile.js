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
            this.interests = [];

            var interestTemplates = context.content.interests;
            _.each(this.person.interests, function(interest){
                self.interests.push(_.findWhere(interestTemplates, {name: interest}));
            });

            this.displayResidential = false;
            var resi = this.person.residentialAddress;
            if(resi && (resi.street1 || resi.city || resi.state|| resi.zip)) {
                this.displayResidential = true;
            }

            this.displayShipping = false;
            var ship = this.person.shippingAddress;
            if(ship && (ship.street1 || ship.city || ship.state|| ship.zip)) {
                this.displayShipping = true;
            }

            return this;
		},

		render: function() {
            var universityLabel = "";
            if(this.person.attendedCollege == 'Yes') {
                universityLabel = this.person.university + " '" + this.person.graduationYear.substring(2,4) + ", ";
            }

            var showGeneralInfo = false;
            if(this.person.gender || this.person.attendedCollege == 'Yes') {
                showGeneralInfo = true;
            }


			//new BannerView({person: this.person}).render();
			this.$el.append(this.template({
                person:this.person,
                interests: this.interests,
                canEdit: context.content.canEdit,
                editUrl: context.content.editUrl,
                activityUrl: context.content.activityUrl,
                displayResidential: this.displayResidential,
                displayShipping: this.displayshipping,
                userLabel: context.content.userLabel,
                aboutImageCount: this.person.aboutImages.length,
                universityLabel:universityLabel,
                showGeneralInfo:showGeneralInfo,
                showAllFields: context.content.showAllFields
            }));
			return this;
		}
	});
});