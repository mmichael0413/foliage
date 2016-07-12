define(function(require) {
    var Backbone = require('backbone'),
        _ = require('underscore'),
        Templates = require('handlebarsTemplates'),
        context = require('context'),

        JobSummary = Backbone.View.extend({

            buildSummary: function () {
                var summary = {
                    types: {},
                    expectedDuration: 0,
                    expectedPayment: 0,
                    payable: 0,
                    billable: 0,
                    required: 0
                };
                
                summary.types = this._buildTypes();
                
                this.tasks.each(function(model) {
                
                    var task = model.toJSON();
                    summary.expectedDuration += this._safeAdd(parseInt(task.expectedDuration, 10));
                    summary.expectedPayment += this._safeAdd(this._calculatedExpectedPayment(task.expectedDuration, task.paymentRate));
                    summary.payable += task.payable ? 1 : 0;
                    summary.billable += task.billable ? 1 : 0;
                    summary.required += task.required ? 1 : 0;
                }.bind(this));


                summary.expectedPayment = parseFloat(summary.expectedPayment/100, 10).toFixed(2);
                if (isNaN(summary.expectedPayment)) {
                    summary.expectedPayment = "0";
                }
                summary.expectedDuration = this._timeDisplay(summary.expectedDuration);
                return summary;
            },

            _safeAdd: function (value) {
                if (isNaN(value)) {
                    return 0;
                } else {
                    return value;
                }
            },

            _timeDisplay: function(time) {
                var h = parseInt(time / 60, 10),
                    m = time % 60;
                return h +" h, " + m +" min";

            },

            _buildTypes: function () {
                var types = {};
                this.tasks.each(function(task) {
                    var type = task.get('type');
                    if (type) {
                        var typeName = type.displayName;
                        if (!types.hasOwnProperty(typeName)) {
                            types[typeName] = 0;
                        }
                        types[typeName] += 1;    
                    }
                    
                }.bind(this));
                return types;
            },


            _calculatedExpectedPayment: function (duration, rate) {
                return (parseInt(duration, 10) / 60) * parseInt(rate, 10);
            },

            initialize: function (data) {
                var self = this;
                this.tasks = data.tasks;

                this.listenTo(this.tasks, 'change', function() {
                    self.render();
                });

                this.listenTo(this.tasks, 'remove', function() {
                    self.render();
                });
            },

            render: function () {
                this.$el.html(Templates["oddjob/jobs/summary"](this.buildSummary()));
            }

        });
    return JobSummary;
});
