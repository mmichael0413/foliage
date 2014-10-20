define(function(require) {
    var Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        HandlebarsTemplates = require('handlebarsTemplates'),
        context = require('context');

    return Backbone.View.extend({
        template: HandlebarsTemplates['reports/widgets/overview_icon'],
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
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + this.model.widget_id + '?'+qs);
        }
    });
});