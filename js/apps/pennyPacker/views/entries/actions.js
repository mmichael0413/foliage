define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),

        /**
         * Encapsules the Actions Row in the Entries List View, specifically the buttons regarding report generation
         * 
         * @type {Object}
         */
        ActionsRowView = {
            el: '.content',

            events: {
                'click .paypal': 'paypal',
                'click .mileage': 'calculateMileage'
            },

            paypal: function (e) {
                e.stopPropagation();
                e.preventDefault();
                window.location = context.content.links.paypal + window.location.search + "&format=csv";
            },
            calculateMileage: function (e) {
                e.stopPropagation();
                e.preventDefault();
                var $link = $(e.currentTarget),
                    url = $link.attr('href') + window.location.search,
                    $spinner = $("<i class='fa fa-spinner fa-spin'></i>");
                
                $.getJSON(
                    url,
                    {}
                )
                .done( function (results) {
                    
                });
                
            }


        };
    return Backbone.View.extend(ActionsRowView);
});