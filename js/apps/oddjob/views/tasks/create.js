define(function (require) {
	var Backbone = require('backbone'),
		_ = require('underscore'),
		Templates = require('handlebarsTemplates'),
		context = require('context'),
		ActivityPacketStore = require('oddjob/stores/activityPackets'),
		SurveysStore = require('oddjob/stores/surveys'),
		TopicSurveysStore = require('oddjob/stores/topicSurveys');

	function buildDurationDisplay(value) {
		var label ="";
		label += Math.floor(value / 60) + ":";
		if (value % 60 === 0) {
			label += "00";
		} else {
			label += value % 60;
		}
		return label;
	}

	var durations = [
		{value: 0, displayName: ":00"},
		{value: 15,  displayName: ":15"},
		{value: 30,  displayName: ":30"},
		{value: 45,  displayName: ":45"}
	];
	for (var i=60; i <= 1440; i++) {
		if (i % 30 === 0) {
			durations.push({ value: i, displayName: buildDurationDisplay(i) });
		}
	}

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
			'change .survey': 'onTrackableChange',
			'change .expected-duration': 'onDurationChange',
			'blur .payment-rate': 'onRateChange',
			'click .payable': 'onPayableChange',
			'click .billable': 'onBillableChange',
			'click .required': 'onRequiredChange'
		},

		initialize: function (data) {
			this.model = data.model;
			this.model.set({'index':data.index}, {silent: true});
			this._setInitialType();
			this._broadcastTask();
			this.listenTo(this.model.collection, "change", function () {
				//console.log("coll size is ", this.model.collection.length);
				this.render();
			}.bind(this));
		},

		setIndex: function(index) {
			this.model.set('index', index);
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
		onTrackableChange: function(event) {
			var trackableId = $(event.currentTarget).val();
			this.model.set("subject", {"uuid":trackableId});
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
				topicSurveys = TopicSurveysStore.toJSON(),
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
			} else if (data.type.id === types[2].id) {
				data.trackableItems = topicSurveys;
				this.markSelected(topicSurveys, "id");
				types[2].selected = true;
			}

			data.types = types;
			data.durations = JSON.parse(JSON.stringify(durations));
			_.each(data.durations, function (duration) {
				if (duration.value == data.expectedDuration) {
					duration.selected = true;
				}
			});
			
			if (this.model.collection) {
				data.canDelete = this.model.collection.length > 1;	
			}
			

			return data;
		},

		_setInitialType: function () {
			var types = JSON.parse(JSON.stringify(context.taskTypes));
			if (!this.model.get('type')) {
				this.model.set('type', types[0]);
			}
		},

		clear: function (e) {
			var index = this.model.get('index');
			e.preventDefault();
			this.model.destroy();
			this.remove();
			context.trigger("task:removed", index);
		}

	};

	return Backbone.View.extend(TaskCreateView);
});