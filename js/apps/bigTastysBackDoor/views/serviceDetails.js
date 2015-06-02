define(function (require) {

	var context = require('context'),
		Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),

		DetailsCollection = Backbone.Collection.extend({
			url: function () {
				return "/monitor/serviceDetails/" + this.serviceId;
			}
		});

	return Backbone.View.extend({
		events: {

		},

		initialize: function () {
			//capture the spinner for use later
			this.$checkContainer = this.$el.find('.check-container');
			this.spinnerHTML = this.$checkContainer.html();

			this.collection = new DetailsCollection();
			this.collection.serviceId = this.$el.data('health-check-id');
			this.listenTo(this.collection, 'sync', this.render);
			this.listenTo(context, "monitor:update", function () {
				this.$checkContainer.html(this.spinnerHTML);
				this.collection.fetch();
			}.bind(this));
			return this;
		},

		render: function () {
			this.$checkContainer.html("");
			this.collection.each(function(item){
				var data = item.toJSON();
				if (data.up) {
					data.status = "ALIVE";
				} else {
					data.status = "FAILING";
				}
				data.successPercentage = Math.round((data.successCount / data.count) * 10000)/100;
				data.failurePercentage = Math.round((data.failureCount / data.count) * 10000)/100;
				this.$el.find('.type').html(" (" +data.type +")");
				this.$checkContainer.append(Templates['bigTastysBackDoor/serviceDetails'](data));
			}.bind(this));
			return this;
		}

	});
	
});