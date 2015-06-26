define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        DirectPaymentView = require('pennyPacker/views/programs/directPayment'),
        ActionsView = require('pennyPacker/views/entries/actions'),
        MissingTravelView = require('pennyPacker/views/travel/missing'),
        InvalidEntriesListView = require('pennyPacker/views/entries/invalid'),
        EntriesListView = require('pennyPacker/views/entries/list');
        
    /**
     * 
     * @type {Router}
     */
    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            'entries/:programId(/)' : 'entryList',
            'program/:programId/direct(/)': 'direct',
            'program/:programId/travel(/)': 'travel'
        },

        before: function (parameters) {
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
            // this may need to be moved into the actual action
            context.router = context.mainRouter;
        },

        entryList: function (programId) {
            window.c = context;
            Filter.init();
            new ActionsView();
            var view = new EntriesListView(),
            invalidView = new InvalidEntriesListView();
            if (context.content.items) {
                view.bootstrapCollection(context.content);
            } else {
                view.render();
            }
            if (context.invalid.items) {
                invalidView.bootstrapCollection(context.invalid);
            } else {
                invalidView.render();
            }
            context.trigger("configure:deepLinks",true);
        },

        travel: function(programId) {
            context.programId = programId;
            var view = new MissingTravelView();
            view.render();
        },

        direct: function (programId) {
            context.programId = programId;
            new DirectPaymentView().render();
        }
    });

    return Router;
});