define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
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
            var account = (this.model.report_filters.account !== undefined) ?  this.model.report_filters.account.id : 'all';
            var viewBreakDownLink = 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs;
            var infoListFilters = this.model.results.info_list_filters;

            if (infoListFilters !== undefined) {
                _.each(infoListFilters, function (val, param) {
                    if ($.isArray(val)) {
                        _.each(val, function (arrayVal) {
                            viewBreakDownLink += '&' + param + '=' + arrayVal;
                        });
                    } else {
                        viewBreakDownLink += '&' + param + '=' + val;
                    }

                });
            }

            this.$el.find('a.breakdown-link').attr("href", viewBreakDownLink);
        }
    });
});