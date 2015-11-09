define(function (require) {
    var _ = require('underscore'),
        ApplicationView = require('thirdchannel/views/application/main');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({

        routes: {
            'agents/opportunities/:program_id/applications/:id' : 'viewApplication'
        },

        viewApplication: function(program_id, id) {
            new ApplicationView({applicationId: id});
        }
    });

    var initialize = function(){
        new AppRouter();
    };
    return {
        initialize: initialize
    };
});