define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
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
            window.filterBootstrap.filters_url = '/api/programs/' + programId + '/filters/program_stores';
            FilterModule.init();

            var program = context.programs.get(programId);
            var programStores = new ProgramStores([], {program: program});

            // TODO: might be better to make this a module (module view?) that manages two views (one for the program model and one for the program stores)
            // Then have a model to represent the state (loading? would display the loading gif)
            var view = new ProgramStoreListView({model: program, collection: programStores});
            this.swap(view);

            //programStores.fetch({reset: true}); // filter control can kick off the initial one...
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
    };

    return {
        initialize: initialize
    };
});