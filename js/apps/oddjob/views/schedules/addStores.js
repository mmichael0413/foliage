define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        SelectedStoresStore = require('oddjob/stores/selectedStores'),

        AddStoresView = {
            el: "#addStoresForm",
            events: {
                'click .submit': 'preSubmit',
                'submit'    : 'preSubmit'
            },

            preSubmit: function (e) {
                this.$el.find("#storeUuidInput").val(SelectedStoresStore.uuids);
            }
        };

    return Backbone.View.extend(AddStoresView);
});