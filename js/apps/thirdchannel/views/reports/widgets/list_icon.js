define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        helpers = require('helpers'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['thirdchannel/reports/widgets/list_icon'],
        initialize: function (options) {
            this.model = options;
        },
        render: function () {
            this.setElement(this.template(this.model));
            this.listenTo(context, 'filter:queryString', this.updateViewBreakDownLink);
            context.trigger('filter:request:queryString');
            return this;
        },
        updateViewBreakDownLink : function (qs) {
            var queryString = helpers.merge_query_string(qs, this.model.info_list_default_filters);
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            var infoListFilters = this.model.results.info_list_filters;
            if (infoListFilters !== undefined) {
                queryString = helpers.merge_query_string(queryString, infoListFilters);
            }
            var viewBreakDownLink = 'reports/' + account + '/info/' + this.model.widget_id + '?' + queryString;
            this.$el.find('a.breakdown-link').attr("href", viewBreakDownLink);
        }
    });
});
