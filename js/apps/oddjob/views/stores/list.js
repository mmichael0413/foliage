define(function (require) {
    var Backbone = require('backbone'),
        _   = require('underscore'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ProgramStoresStore = require('oddjob/stores/programStores'),
        Pageable = require('shared/views/utils/pageable_component');


        ProgramStoreListView = {
            el: "#storeList",
            initialize: function () {
                this.collection = ProgramStoresStore;
                this.listenTo(ProgramStoresStore, 'sync', function () {
                    this.render();
                }.bind(this));
                // the filter will awaken the programStores fetch
            },

            render: function () {
                var data = {
                    count: ProgramStoresStore.count,
                    programStores: ProgramStoresStore.toJSON()
                };
                this.$el.html(Templates["oddjob/stores/list"](data));
                this.renderPagination();
                return this;
            }
        };

    _.extend(ProgramStoreListView, Pageable);
    return Backbone.View.extend(ProgramStoreListView);
});