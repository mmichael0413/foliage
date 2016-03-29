define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),

        /**
         * Encapsulates the Actions Row in the Entries List View, specifically the buttons regarding report generation
         * 
         * @type {Object}
         */
        ActionsRowView = {
            el: '.content',

            events: {
                'click .paypal': 'paypal',
                'click .sales-stores-audit': 'salesStoresAuditExport'
            },

            render: function () {
                return this;
            },


            paypal: function (e) {
                e.stopPropagation();
                e.preventDefault();
                window.location = context.content.links.paypal + window.location.search + "&format=csv";
            },

            salesStoresAuditExport: function(e) {
                e.preventDefault();
                console.log('sales stores audit export');
            }
        };
    return Backbone.View.extend(ActionsRowView);
});