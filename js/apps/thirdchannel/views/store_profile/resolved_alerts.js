define(function(require) {
    var BaseAlertsCollection = require('thirdchannel/collections/alerts/base'),
        ResolvedAlertsDetailsView = require('thirdchannel/views/store_profile/resolved_alerts_details'),

        /**
         *
         * @extends { module:thirdchannel/views/store_profile/open_alerts }
         * @exports thirdchannel/views/store_profile/resolved_alerts
         */
        ResolvedAlertsView = require('thirdchannel/views/store_profile/open_alerts').extend({
            el: '#resolvedAlerts',
            subViewClass: ResolvedAlertsDetailsView,
            collectionClass: BaseAlertsCollection.extend({
                resolved: true,
            }),
            template: 'store_profile/resolved_alerts_rows'
        });

    return ResolvedAlertsView;  
});