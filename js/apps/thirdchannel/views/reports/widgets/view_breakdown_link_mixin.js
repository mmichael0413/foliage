define(function(require) {
    var qslib = require('qs'),
        context = require('context');

    var UpdateViewBreakdownLinkMixin = {
        merge_query_string: function(qs, obj) {
            obj = (obj === undefined) ? {} : obj;
            var qs_obj = qslib.parse(qs);
            var merged = _.extend(obj, qs_obj);
            return qslib.stringify(merged, { arrayFormat: 'brackets' });
        },
        updateViewBreakDownLink : function (qs, model) {
            this.queryString = this.merge_query_string(qs, model.info_list_default_filters);
            var account = (model.report_filters.account !== undefined) ?  model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", '/programs/' + context.programId + '/reports/' + account + '/info/' + model.widget_id + '?' + this.queryString);
        }
    };
    return UpdateViewBreakdownLinkMixin;
});
