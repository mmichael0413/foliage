define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        //NavigationView = require('app/views/layout/navigation'),
        MainLayout = require('app/views/layout/main'),
        GlobalView = require('app/views/activities/global'),
        ActivitiesView = require('app/views/activities/activities'),
        TeamsMain = require('app/views/teams/main');



    var AppRouter = Backbone.Router.extend({
        routes: {
            'programs/:program_id/activities' : 'activityFeed',
            'programs/:program_id/profiles/:user_id' : 'programProfile',
            'programs/:program_id/teams': 'teams'
        },
        activityFeed: function(program_id){

            var queryString = window.location.search;
            var url = '/programs/' + program_id + '/activities/posts' + queryString;
            var incomplete_url =  '/programs/' + program_id + '/activities/incomplete_posts' + queryString;

            new GlobalView();
            var activitiesView = new ActivitiesView({
                url: url,
                incompleteActivityUrl: incomplete_url,
                programId: program_id
            });
            activitiesView.fetch();
        },


        teams: function () {
            TeamsMain.init();
        },

        programProfile: function(program_id, user_id) {

            var queryString = window.location.search;
            var url = '/programs/' + program_id + '/activities/' + user_id + '/for' + queryString;
            var incomplete_url =  '/programs/' + program_id + '/activities/incomplete_posts' + queryString;

            new GlobalView();
            var activitiesView = new ActivitiesView({
                url: url,
                incompleteActivityUrl: incomplete_url,
                programId: program_id
            });
            activitiesView.fetch();

        }
    });

    var initialize = function(){
        var app_router = new AppRouter();
        Backbone.history.start({pushState: true});
        //new NavigationView();
        MainLayout.init();
    };
    return {
        initialize: initialize
    };
});