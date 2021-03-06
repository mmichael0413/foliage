define(function(require){
    var context = require('context'),
        ProfileView = require('erudition/views/profile/view_profile'),
        ProfileEdit = require('erudition/views/profile/edit'),
        CreateApplicationView = require('erudition/views/application/create'),
        EditFTUEView = require('erudition/views/ftue/edit'),
        RecruitingToolsView = require('erudition/views/recruiting/tools'),
        RecruitingUsersView = require('erudition/views/recruiting/users'),
        RecruitingOpportunitiesView = require('erudition/views/recruiting/opportunities');



    AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        before: function(parameters) {

            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
        },

        routes: {
            'program/:programUUID/profile(/)' : 'completeProfile',
            'profile/view/:personId(/)' : 'viewProfile',
            'profile/view(/)' : 'viewProfile',
            'profile/edit(/)' : 'editProfile',
            'profile/edit/:personId(/)' : 'editProfile',
            'profile/edit/program/:programUUID(/)' : 'editProfile',
            'program/:programId/application/step/1(/)' : 'createApplication',
            'profile/edit/ftue/program/:programUUID(/)' : 'editFTUE',
            
            'recruiting/tools(/)' : 'recruitingTools',
            'recruiting/users(/)' : 'recruitingUsers',
            'recruiting/opportunities(/)' : 'recruitingOpportunities'
        },

        createApplication: function (programId) {
            new CreateApplicationView({programId: programId, template: 'erudition/application/create'}).render();
        },

        completeProfile: function(){
            new ProfileView().render();
        },

        editProfile: function() {
            new ProfileEdit().render();
        },

        viewProfile: function () {
            new ProfileView().render();
        },

        editFTUE: function (programUUID) {
            new EditFTUEView({programUUID: programUUID}).render();
        },
        
        recruitingTools: function () {
            new RecruitingToolsView();
        },

        recruitingUsers: function () {
            new RecruitingUsersView().render();
        },

        recruitingOpportunities: function () {
            new RecruitingOpportunitiesView().render();
        }
    });

    return AppRouter;
});
