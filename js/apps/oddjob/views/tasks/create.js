define(function (require) {
	var Backbone = require('backbone'),
		_		= require('underscore'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		ActivityPacketStore = require('oddjob/stores/activityPackets'),
		SurveysStore = require('oddjob/stores/surveys');

	var durations = [
		{value: 30,  displayName: "30 min"},
		{value: 60,  displayName: "60 min"},
		{value: 90,  displayName: "1h 30 min"},
		{value: 120, displayName: "2h 0 min"},
		{value: 150, displayName: "2h 30 min"},
		{value: 180, displayName: "3h 0 min"},
		{value: 210, displayName: "3h 30 min"},
		{value: 240, displayName: "4h 0 min"},
		{value: 270, displayName: "4h 30 min"},
		{value: 300, displayName: "5h 0 min"},
	];

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
			'change .expected-duration': 'onDurationChange',
			'blur .payment-rate': 'onRateChange',
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
			var target = $(event.currentTarget), 
				cents = parseInt(parseFloat(target.val(), 10)*100, 10);
			this.model.set("displayPaymentRate", this._formatCents(cents));
			target.val(this.model.get("displayPaymentRate"));
			this._updateFromEvent("paymentRate", cents);
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
		_formatCents: function(cents) {
			return parseFloat(cents/100).toFixed(2);
		},

		buildData: function () {
			//this.model.set('types', context.taskTypes);
			var surveys = SurveysStore.toJSON(),
				activityPackets = ActivityPacketStore.toJSON(),
				data = this.model.toJSON(),
				types = JSON.parse(JSON.stringify(context.taskTypes));

			data.displayPaymentRate = this._formatCents(data.paymentRate);			
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
			data.durations = JSON.parse(JSON.stringify(durations));
			_.each(data.durations, function (duration) {
				if (duration.value == data.expectedDuration) {
					duration.selected = true;
				}
			});
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
			context.trigger("task:removed", this.model.get('index'));
			this.remove();
		}

	};

	return Backbone.View.extend(TaskCreateView);
});