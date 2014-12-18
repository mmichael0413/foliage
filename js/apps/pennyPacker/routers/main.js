define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),

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
        },

        entryList: function (programId) {
            var view = new EntriesListView();
            if (context.content.items) {
                view.bootstrapCollection(context.content);
            } else {
                view.render();
            }
        }
    });

    return Router;
});