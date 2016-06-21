define(function (require) {
	var Backbone = require('backbone'),
		_		= require('underscore'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		ActivityPacketStore = require('oddjob/stores/activityPackets'),
		SurveysStore = require('oddjob/stores/surveys');

	/**
	 * 
	 * @type View
	 */
	var TaskCreateView = {
		templateName: 'oddjob/tasks/create',
		className: 'task row clearfix pure-g',
		events: {
			'click .remove': 'clear',
			'change .task-type': 'onTypeChange',
			'keyup .expected-duration': 'onDurationChange',
			'keyup .payment-rate': 'onRateChange',
			'click .payable': 'onPayableChange',
			'click .billable': 'onBillableChange',
			'click .required': 'onRequiredChange'
		},

		initialize: function (data) {
			this.model = data.model;
			this.model.set('index', data.index);
			this._setInitialType();
			this._broadcastTask();
		},

		onDurationChange: function(event) {
			this._updateFromEvent("expectedDuration", parseInt($(event.currentTarget).val(), 10));
		},

		onRateChange: function (event) {
			this._updateFromEvent("paymentRate", parseInt($(event.currentTarget).val(), 10)*100);
		},

		onPayableChange: function (event) {
			this._updateFromEvent("payable", $(event.currentTarget).is(":checked"));
		},
		onBillableChange: function (event) {
			this._updateFromEvent("billable", $(event.currentTarget).is(":checked"));
		},
		onRequiredChange: function (event) {
			this._updateFromEvent("required", $(event.currentTarget).is(":checked"));
		},


		onTypeChange: function (event) {
			var typeId = $(event.currentTarget).val(),
			// we have the raw string, find it in the collection
				result = _.find(context.taskTypes, function (type) {
					return type.name == typeId;
				});
			this.model.set("type", result);
			this.render();
			this._broadcastTask();
		},

		_updateFromEvent: function (key, value) {
			//event.preventDefault();
			this.model.set(key, value);
			this._broadcastTask();
		},

		_broadcastTask: function () {
			context.trigger("task:updated", this.model);
		},

		render: function () {
			this.$el.html(Templates[this.templateName](this.buildData()));
			return this;
		},

		/**
		 *	Compares a trackable data collection and marks the 
		 *	item that matches the model's subject id as being sellected
		 * 
		 * @param  {collection} collection [description]
		 * @param  {string} idField    [description]
		 */
		markSelected: function (collection, idField) {
			var cursor = collection.length,
				subject = this.model.get('subject');
			while(cursor--) {
				if (subject && collection[cursor][idField] == subject.uuid) {
					collection[cursor].selected = true;
				}
			}
			
		},

		buildData: function () {
			//this.model.set('types', context.taskTypes);
			var surveys = SurveysStore.toJSON(),
				activityPackets = ActivityPacketStore.toJSON(),
				data = this.model.toJSON(),
				types = JSON.parse(JSON.stringify(context.taskTypes));

			
			if (!data.type) {
				data.type = types[0];
			}

			if (data.type.id == types[0].id){
				data.trackableItems = surveys;
				this.markSelected(surveys, "uuid");
				types[0].selected = true;
			} else if (data.type.id == types[1].id) {
				data.trackableItems = activityPackets;
				this.markSelected(activityPackets, "id");
				types[1].selected = true;
			}
			data.types = types;
			return data;
		},

		_setInitialType: function () {
			var types = JSON.parse(JSON.stringify(context.taskTypes));
			if (!this.model.get('type')) {
				this.model.set('type', types[0]);
			}
		},

		clear: function (e) {
			e.preventDefault();
			this.remove();
		}

	};

	return Backbone.View.extend(TaskCreateView);
});