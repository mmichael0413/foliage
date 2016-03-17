
define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        c3 = require('c3'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'section data-section special-project-report',
        template: HandlebarsTemplates['thirdchannel/dashboards/special_projects/item'],
        initialize: function (options) {
            this.options = options;
            this.model = options.model;
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        renderChart: function() {
            var colors = {
                Completion: '#9fb2c0',
                Target: '#e5e9ed'
            };

            var data = [
                ['Completion', this.model.get('percent_of_stores_complete')]
            ];

            if(this.model.get('target')) {
                data.unshift(['Target', this.model.get('target')]);

                if(this.model.get('percent_of_stores_complete') >= this.model.get('target')) {
                    colors['Completion'] = '#a8bc4c';
                }
            }

            var chart = c3.generate({
                bindto: this.$('.chart')[0],
                data: {
                    columns: data,
                    colors: colors,
                    type: 'gauge'
                },
                gauge: {
                    label: {
                        show: false,
                        format: function(value, ratio, column) {
                            return '';
                        }
                    },
                    expand: false,
                    min: 0,
                    max: 100,
                    units: ' %',
                    width: 40
                },
                tooltip: {
                    show: true,
                    format: {
                        value: function (value, ratio, id, index) { return value + '%'; }
                    }
                }
            });
        }
    });
});