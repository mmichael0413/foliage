define(function(require) {
    var Backbone = require('backbone'),
        context = require('context'),
        Actions = require('stores/collections/actions'),
        ActionsView = require('stores/views/actions'),
        ProgramStoreListView = require('stores/views/program_stores/list'),
        FilterModule = require('thirdchannel/views/filter/main');

    var Main = Backbone.Model.extend({
        initialize: function() {
            this.actions = new Actions([
                {
                    type: 'link',
                    link: '/programs/' + this.get('program').id + '/uploads/new',
                    className: 'primary',
                    icon: 'ic_add',
                    text: 'Upload Stores',
                    bypass: true
                },
                {
                    type: 'link',
                    link: '/programs/' + this.get('program').id + '/exports',
                    className: 'primary',
                    icon: 'ic_download',
                    text: 'Export Stores',
                    bypass: true
                },
                {
                    type: 'button',
                    className: 'default toggle-filter',
                    icon: 'ic_filter'
                }
            ]);

            this.actionsView = new ActionsView({collection: this.actions});
            this.programStoresListView = new ProgramStoreListView({model: this.get('program'), collection: this.get('programStores')});
        },
        render: function() {
            // TODO: (Some notes) filters/actions views should be more composable
            //       For instance filter view should just take the collection and filter it directly instead of sending
            //       a filter event over context and any view should update when the collection receives a reset event
            //       It might also make more sense to build the filter collection outside of the FilterModule
            window.filterBootstrap.filters_url = '/api/programs/' + this.get('program').id + '/filters/program_stores';
            FilterModule.init();
            this.actionsView.render();
            return this.programStoresListView.render();
        },
        leave: function() {
            this.actionsView.$el.empty();
            this.actionsView = null;
            this.programStoresListView.leave();
        }
    });

    return Main;
});