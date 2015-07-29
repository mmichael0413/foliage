define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        Actions = require('stores/collections/actions'),
        ActionsView = require('stores/views/actions'),
        ProgramListView = require('stores/views/programs/list'),
        ProgramStores = require('stores/collections/program_stores'),
        ProgramStoreListView = require('stores/views/program_stores/list'),
        FilterModule = require('thirdchannel/views/filter/main');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        container: $('#application'),
        currentView: null,

        routes: {
            '(/)': 'programList',
            'programs/:programId(/)': 'storeList'
        },

        programList: function() {
            var view = new ProgramListView({collection: context.programs});
            this.swap(view);
        },


        storeList: function(programId) {
            // TODO: might be better to make this a module (module view?) that manages the actions/filters/list views (that has a leave method to work with swap)

            // TODO: (Some notes) filters/actions views should be more composable
            //       For instance filter view should just take the collection and filter it directly instead of sending
            //       a filter event over context and any view should update when the collection receives a reset event
            //       It might also make more sense to build the filter collection outside of the FilterModule

            var actions = new Actions([
                {
                    type: 'link',
                    link: '/programs/' + programId + '/exports',
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
            var actionView = new ActionsView({collection: actions});
            actionView.render();

            window.filterBootstrap.filters_url = '/api/programs/' + programId + '/filters/program_stores';
            FilterModule.init();

            var program = context.programs.get(programId);
            var programStores = new ProgramStores([], {program: program});

            var view = new ProgramStoreListView({model: program, collection: programStores});
            this.swap(view);

            //context.trigger('filter:toggle'); // and this doesn't work...
        },

        swap: function(view) {
            if(this.currentView) {
                if(this.currentView.leave) {
                    this.currentView.leave();
                } else {
                    this.currentView.remove();
                }
            }
            this.currentView = view;
            this.container.html(view.render().el);
        }
    });

    var initialize = function() {
        namespacer('stores');
        if(window.bootstrap && window.bootstrap.programs) {
            context.programs = new Backbone.Collection(window.bootstrap.programs);
        }
        context.router = new AppRouter();
        Backbone.history.start({pushState: true, hashChange: false});
        MainLayout.init();
    };

    return {
        initialize: initialize
    };
});