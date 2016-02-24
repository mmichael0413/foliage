define(function(require) {
    var $ = require('jquery');
    var deparam = require('jquery-deparam');
    var merge_query_string = function(qs, obj) {
        var qs_obj = deparam(qs);
        var merged = _.extend(obj , qs_obj);
        return $.param(merged);
    };
    var UpdateViewBreakdownLinkMixin = {
        updateViewBreakDownLink : function (qs, model) {
            var queryString = merge_query_string(qs, model.info_list_default_filters);
            var account = (model.report_filters.account !== undefined) ?  model.report_filters.account.id : 'all';
            this.$el.find('a.breakdown-link').attr("href", 'reports/' + account + '/info/' + model.widget_id + '?' + queryString);
        }
    };
    return UpdateViewBreakdownLinkMixin;
});
