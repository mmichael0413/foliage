define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        DirectPaymentView = require('pennyPacker/views/programs/directPayment'),
        ActionsView = require('pennyPacker/views/entries/actions'),
        InvalidEntriesListView = require('pennyPacker/views/entries/invalid'),
        MissingTravelListView = require('pennyPacker/views/travel/missingList'),
        EntriesListView = require('pennyPacker/views/entries/list');
        
    /**
     * 
     * @type {Router}
     */
    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            'entries/:programId/mileage/missing/list': 'missingTravelList',
            'entries/:programId(/)' : 'entryList',
            'program/:programId/direct(/)': 'direct'
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

        missingTravelList: function (programId) {
            var view = new MissingTravelListView();
            view.collection.reset(context.content.items);
            view.render();
        },

        direct: function (programId) {
            context.programId = programId;
            new DirectPaymentView().render();
        }
    });

    return Router;
});