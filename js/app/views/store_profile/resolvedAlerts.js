define(function(require) {
    var Backbone = require('backbone'),
        ResolvedAlertsView = require('app/views/store_profile/openAlerts').extend({
            el: '#resolvedAlerts',
            collectionClass: Backbone.Collection.extend({
                queryString:"",
                url: function () {
                    return "test_url" + "?" + this.queryString;
                }
            }),
            template: 'store_profile/resolved_alerts_rows'
        });

    return ResolvedAlertsView;  
});