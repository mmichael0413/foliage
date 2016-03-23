define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        ViewBreakdownLinkMixin = require('thirdchannel/views/reports/widgets/view_breakdown_link_mixin'),
        context = require('context');

    var view = Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/list_icon'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            this.setElement(this.template(this.model));
            this.listenTo(context, 'filter:queryString', function(qs){ this.updateViewBreakDownLinkWrapper(qs); });
            return this;
        },
        updateViewBreakDownLinkWrapper : function (qs) {
            var filters = this.model.info_list_default_filters;
            var infoListFilters = this.model.results.info_list_filters;
            if (infoListFilters !== undefined) {
                filters = _.extend(infoListFilters, filters);
            }
            this.updateViewBreakDownLink(qs, filters);
        }
    });
    _.extend(view.prototype, ViewBreakdownLinkMixin);
    return view;
});
