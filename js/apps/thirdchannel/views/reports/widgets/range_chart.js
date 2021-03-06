define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context');

    var view = Backbone.View.extend({
        tagName: 'span',
        template: HandlebarsTemplates['thirdchannel/reports/widgets/range_chart'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            if (_.size(this.model.results) > 0) {
                this.setElement(this.template(this.model));
                if (this.model.show_view_list !== undefined) {
                    this.listenTo(context, 'filter:queryString', function (qs) {
                        this.updateViewBreakDownLink(qs, this.model);
                    });
                    context.trigger('filter:request:queryString');
                }
            }
            return this;
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
