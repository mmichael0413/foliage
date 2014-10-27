define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        ResolvedAlertsView = require('app/views/store_profile/openAlerts').extend({
            el: '#resolvedAlerts',
            collectionClass: Backbone.Collection.extend({
                queryString: "",
                url: function () {
                    return context.links.resolved; // + "?" + this.queryString;
                },
                parse: function (response) {
                    this.count = response.count;
                    return response.items;
                }
            }),
            template: 'store_profile/resolved_alerts_rows'
        });

    return ResolvedAlertsView;  
});