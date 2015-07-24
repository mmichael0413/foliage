define(function (require) {
    var Backbone = require('backbone'),
        _   = require('underscore'),
        context = require('context'),
        Templates = require('handlebarsTemplates'),
        ProgramStoresStore = require('oddjob/stores/programStores'),
        SelectedStoresStore = require('oddjob/stores/selectedStores'),
        Pageable = require('shared/views/utils/pageable_component');


        ProgramStoreListView = {
            el: "#storeList",
            events: {
                'click .check': 'singleCheck',
            },
            templateName: "oddjob/stores/list",

            initialize: function () {
                this.collection = ProgramStoresStore;
                // the filter will awaken the programStores fetch
                this.listenTo(ProgramStoresStore, 'sync', function () {
                    this.render();
                }.bind(this));

                this.listenTo(context, 'stores:page:select:true', this.selectAll);
                this.listenTo(context, 'stores:page:select:false', this.deselectAll);
                
            },

            render: function () {
                var data = {
                    count: ProgramStoresStore.count,
                    programStores: ProgramStoresStore.toJSON()
                };
                // update the programStores data to contain whether or not the uuid is currently in the selected store
                _.each(data.programStores, function(store) {
                    store.selected = SelectedStoresStore.contains(store.uuid);
                });

                this.$el.html(Templates[this.templateName](data));
                this.renderPagination();
                return this;
            },

            singleCheck: function (e) {
                var $check = $(e.currentTarget);
                context.trigger('stores:uuids:' + $check.prop('checked'), [$check.val()]);

            },

            selectAll: function () {
                this._check(true);
            },

            deselectAll: function () {
                this._check(false);
            },

            _check: function (value) {
                var $checkboxes = this.$el.find("input[type='checkbox']"),
                    uuids = _.map($checkboxes, function(checkbox) {
                      return checkbox.value;  
                    });
                $checkboxes.prop('checked', value);
                // the store uuids store should listen for this
                context.trigger('stores:uuids:' + value, uuids);
            }

        };

    _.extend(ProgramStoreListView, Pageable);
    return Backbone.View.extend(ProgramStoreListView);
});