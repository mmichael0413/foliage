define(function(require) {
    var deparam = require('jquery-deparam'),
        context = require('context');
    var merge_query_string = function(qs, obj) {
        obj = (obj === undefined) ? {} : obj;
        var qs_obj = deparam(qs);
        var merged = _.extend(obj, qs_obj);
        return $.param(merged);
    };
    var UpdateViewBreakdownLinkMixin = {
        updateViewBreakDownLink : function (qs, model) {
            var queryString = merge_query_string(qs, model.info_list_default_filters);
            var account = (model.report_filters.account !== undefined) ?  model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", '/programs/' + context.programId + '/reports/' + account + '/info/' + model.widget_id + '?' + queryString);
        }
    };
    return UpdateViewBreakdownLinkMixin;
});
