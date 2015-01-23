define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),

        /**
         * Encapsules the Actions Row in the Entries List View, specifically the buttons regarding report generation
         * 
         * @type {Object}
         */
        ActionsRowView = {
            el: '.content',

            events: {
                'click .paypal': 'paypal'
            },

            paypal: function (e) {
                e.stopPropagation();
                e.preventDefault();
                window.location = context.content.links.paypal + window.location.search + "&format=csv";
            }


        };
    return Backbone.View.extend(ActionsRowView);
});