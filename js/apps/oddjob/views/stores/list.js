define(function (require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ProgramStoresStore = require('oddjob/stores/programStores'),


        ProgramStoreListView = {
            el: "#storeList",
            initialize: function () {
                this.listenTo(ProgramStoresStore, 'sync', function () {
                    console.log("Rendering!");
                    this.render();
                }.bind(this));
                ProgramStoresStore.fetch();
            },

            render: function () {
                var data = {
                    count: ProgramStoresStore.count,
                    programStores: ProgramStoresStore.toJSON()
                };
                this.$el.html(Templates["oddjob/stores/list"](data));
                return this;
            }
        };


    return Backbone.View.extend(ProgramStoreListView);
});