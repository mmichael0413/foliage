
define(function(require) {
    var $ = require('jquery'),
        Backbone = require('backbone'),
        context = require('context'),
        c3 = require('c3'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        className: 'col-1-2 col-md-1-1',
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
                'Need Revisit': '#ff0000',
                Completed: '#96d1b1',
                'Visited, but incompleted': '#F7B05B'
            };

            var data = [];

            var percentComplete = this.model.get('percent_of_stores_complete');
            var percentIncomplete = this.model.get('percent_of_stores_incomplete');
            var percentNeedRevisit = this.model.get('percent_of_stores_need_revisit');
            var target = this.model.get('target');

            var idValues = {
                Completed: percentComplete,
                'Visited, but incompleted': percentIncomplete,
                'Need Revisit': percentNeedRevisit,
                Target: target
            };

            percentComplete += percentIncomplete;

            data.push(['Target', target]);
            data.push(['Completed', percentComplete]);
            data.push(['Visited, but incompleted', percentIncomplete]);
            data.push(['Need Revisit', percentNeedRevisit]);

            if(percentComplete <= target) {
                colors.Completed = '#709d84';
                colors.Target = '#96d1b1';
            }

            var chart = c3.generate({
                bindto: this.$('.chart')[0],
                data: {
                    columns: data,
                    colors: colors,
                    type: 'gauge'
                },
                padding: {
                    top: 0,
                    bottom: 0
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
                    width: 39
                },
                tooltip: {
                    show: true,
                    format: {
                        value: function (value, ratio, id, index) {
                            return idValues[id] + '%'; }
                    }
                }
            });
        }
    });
});