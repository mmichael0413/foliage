define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/overview_icon'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            this.setElement(this.template(this.model));
            this.listenTo(context, 'filter:queryString', function(qs){this.updateViewBreakDownLink(qs, this.model); });
            context.trigger('filter:request:queryString');
            return this;
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
