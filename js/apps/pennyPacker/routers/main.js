define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        Filter = require('thirdchannel/views/filter/main'),
        ActionsView = require('pennyPacker/views/entries/actions'),
        InvalidEntriesListView = require('pennyPacker/views/entries/invalid'),
        EntriesListView = require('pennyPacker/views/entries/list');
        
    /**
     * 
     * @type {Router}
     */
    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            'entries/:programId(/)' : 'entryList'
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
            new ActionsView().render();
            var view = new EntriesListView();
            var invalidView = new InvalidEntriesListView();
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
        }
    });

    return Router;
});