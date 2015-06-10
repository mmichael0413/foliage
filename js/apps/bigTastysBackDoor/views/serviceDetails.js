define(function (require) {

	var context = require('context'),
		Backbone = require('backbone'),
		Templates = require('handlebarsTemplates'),
		HealthCheckModel = Backbone.Model.extend({
			url: function () {
				return "/monitor/disable/" + this.id ;
			}
		}),

		DetailsCollection = Backbone.Collection.extend({
			url: function () {
				return "/monitor/serviceDetails/" + this.serviceId;
			},
			model: HealthCheckModel
		});

	return Backbone.View.extend({
		events: {
			'click .delete-check': 'deleteCheck'
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
		_percentize: function (numerator, denomenator) {
			return Math.round((numerator / denomenator) * 10000)/100;
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
				data.successPercentage = this._percentize(data.successCount, data.count);
				data.failurePercentage = this._percentize(data.failureCount, data.count);
				this.$el.find('.type').html(" (" +data.type +")");
				this.$checkContainer.append(Templates['bigTastysBackDoor/serviceDetails'](data));
			}.bind(this));
			return this;
		},

		deleteCheck: function () {
			console.log(arguments);
			var data = this.collection.toJSON()[0];
			if (confirm("Are you sure you wish to delete the " + data.type +" check for service " +data.service +" ?")) {

				this.collection.models[0].destroy()
				.then(function () {
					this.remove();
				}.bind(this))
				.fail(function () {
					alert("Could not delete for some reason...");
				});
			}
			
		}

	});
	
});