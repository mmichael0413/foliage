define(function(require) {
    var context = require('context'),
        BaseAlertsCollection = require('app/collections/alerts/base'),

        ResolvedAlertsView = require('app/views/store_profile/openAlerts').extend({
            el: '#resolvedAlerts',
            collectionClass: BaseAlertsCollection.extend({
                getUrlBase: function () {
                    return context.alerts.links.self;
                },
                getCustomerStoreId: function () {
                    return context.requestParameters[1];
                },
                resolved: true,
            }),
            template: 'store_profile/resolved_alerts_rows'
        });

    return ResolvedAlertsView;  
});