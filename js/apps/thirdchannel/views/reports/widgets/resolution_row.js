define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/resolution_row'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            this.setElement(this.template(this.model));
            this.listenTo(context, 'filter:queryString', function(qs){ this.updateViewBreakDownLink(qs, this.model); });
            context.trigger('filter:request:queryString');
            return this;
        }
    });
});
