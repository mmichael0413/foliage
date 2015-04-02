define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/heatmap'],
        initialize: function (options) {
            var self = this,
                legend = {};

            this.model = options;

            // Build the legend collection (dealing with hstore -> json weirdness)
            this.model.config.legend = JSON.parse(this.model.config.legend);

            _.each(this.model.config.legend, function(key, i) {
               legend[key] = self.model.config.legendColors[i];
            });

            this.model.config.legend = legend;

            console.log(this.model);
        },
        render: function () {
            this.setElement(this.template(this.model));
            return this;
        }
    });
});