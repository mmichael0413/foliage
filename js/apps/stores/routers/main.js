define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        ProgramListView = require('stores/views/program_list');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        container: $('#application'),
        currentView: null,

        routes: {
            '(/)': 'programList',
            ':programId(/)': 'storeList'
        },

        before: function (parameters, route, name) {
            if(this.currentView) {
                if(this.currentView.leave) {
                    this.currentView.leave();
                } else {
                    this.currentView.remove();
                }
                this.currentView = null;
            }
        },

        programList: function() {
            var view = new ProgramListView({collection: context.programs});
            this.container.html(view.render().el);
            this.currentView = view;
        },

        storeList: function(programId) {
            console.log(programId);
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