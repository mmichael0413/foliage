define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/quadrant_chart'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results) > 0) {
                this.setElement(this.template(this.model));
                this.listenTo(context, 'filter:queryString', function(qs){ this.updateViewBreakDownLink(qs, this.model); });
                context.trigger('filter:request:queryString');
            }
            return this;
        }
    });
});
