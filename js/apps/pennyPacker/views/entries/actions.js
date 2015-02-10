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

            render: function () {
                var $missingLink = $(".missing-mileage");
                $missingLink.attr('href', $missingLink.attr('href') + window.location.search);
                this.findMissingMileage();
                this.listenTo(context, 'filter:query', function (data) {
                    var url = $missingLink.attr('href').split("?")[0] + "?"+ data;
                    $missingLink.attr('href', url);
                    this.findMissingMileage();
                });

                return this;
            },


            paypal: function (e) {
                e.stopPropagation();
                e.preventDefault();
                window.location = context.content.links.paypal + window.location.search + "&format=csv";
            },

            findMissingMileage: function () {
                var $span = this.$el.find('.missing-mileage span');

                $.getJSON(
                    context.content.links.missingTravel + window.location.search,
                    {}
                    ).done(function (data) {
                        //console.log(data.count);
                        $span.text("Potentially Missing Mileage: " + data.count);
                    });

                
            }

            /*
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
            */


        };
    return Backbone.View.extend(ActionsRowView);
});