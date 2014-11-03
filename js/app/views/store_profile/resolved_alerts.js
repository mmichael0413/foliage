define(function(require) {
    var BaseAlertsCollection = require('app/collections/alerts/base'),
        ResolvedAlertsDetailsView = require('app/views/store_profile/resolved_alerts_details'),

        ResolvedAlertsView = require('app/views/store_profile/open_alerts').extend({
            el: '#resolvedAlerts',
            subViewClass: ResolvedAlertsDetailsView,
            collectionClass: BaseAlertsCollection.extend({
                resolved: true,
            }),
            template: 'store_profile/resolved_alerts_rows'
        });

    return ResolvedAlertsView;  
});