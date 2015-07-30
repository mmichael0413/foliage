define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        ProgramListView = require('stores/views/programs/list'),
        ProgramStores = require('stores/collections/program_stores'),
        ProgramStoresModule = require('stores/views/program_stores/list_main');

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
            var program = context.programs.get(programId);
            var programStores = new ProgramStores([], {program: program});

            var programStoreModule = new ProgramStoresModule({program: program, programStores: programStores});

            this.swap(programStoreModule);

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