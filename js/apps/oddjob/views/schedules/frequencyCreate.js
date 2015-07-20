define(function (require) {
    var Backbone = require('backbone'),
        Pikaday = require('pikaday'),
        context = require('context');

    var FrequencyCreateView = {

        render: function () {
            this.configureDatepicker($(".datepicker.begin"));
            this.configureDatepicker($(".datepicker.end"));
            return this;
        },

        configureDatepicker: function ($input) {
                var self = this,
                    datepicker = new Pikaday({field: $input[0],
                         position: "bottom right",
                     });
                self.$el.find('.pika-single').addClass('col-1-1');
            },
    };

    return Backbone.View.extend(FrequencyCreateView);
});