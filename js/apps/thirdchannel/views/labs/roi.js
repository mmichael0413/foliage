define(function(require) {

    var Backbone = require('backbone'),
        context = require('context'),
        $ = require('jquery'),





        ROIView = {
            el: '.roi-control',

            events: {
                'click .run-roi': 'queryDates'
            },

            queryDates: function () {
                var $select = this.$el.find('.multi-select'),
                    dates = $select.val(),
                    paramName = $select.attr('name'),
                    payload = {};
                payload[paramName] = dates;
                if (dates) {
                    $.getJSON(context.links.roi.report, payload)
                    .done(function () {
                        console.log(arguments);
                    });
                }
            }

        };
    
    return Backbone.View.extend(ROIView);
});