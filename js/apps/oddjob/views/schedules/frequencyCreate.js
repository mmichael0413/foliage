define(function (require) {
    var Backbone = require('backbone'),
        Pikaday = require('pikaday'),
        SelectedStoresStore = require('oddjob/stores/selectedStores'),
        context = require('context');

    var FrequencyCreateView = {
        events: {
            'click .submit': 'preSubmit',
            'submit'    : 'preSubmit'
        },

        initialize: function () {
            this.listenTo(context, 'stores:selected:count', this.updateCount);
        },

        render: function () {
            this.configureDatepicker($(".datepicker.begin"));
            this.configureDatepicker($(".datepicker.end"));
            return this;
        },

        preSubmit: function (e) {
            this.$el.find("#storeUuidInput").val(SelectedStoresStore.uuids);
        },


        configureDatepicker: function ($input) {
            var self = this,
                datepicker = new Pikaday({field: $input[0],
                     position: "bottom right",
                 });
            self.$el.find('.pika-single').addClass('col-1-1');
        },
        updateCount: function (count) {
            this.$el.find('#storeCount').text(count);
        }
    };

    return Backbone.View.extend(FrequencyCreateView);
});