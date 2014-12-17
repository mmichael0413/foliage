define(function(require) {
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone');
        
    /**
     * 
     * @type {Router}
     */
    var Router = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            'entries/:programId(/)' : 'entryList'
        },

        entryList: function (programId) {
            
        }
    });

    return Router;
});