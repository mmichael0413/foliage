define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        NavigationView = require('app/views/layout/navigation'),
        GlobalView = require('app/views/activities/global'),
        ActivitiesView = require('app/views/activities/activities');



    var AppRouter = Backbone.Router.extend({
        routes: {
            'programs/:program_id/activities' : 'activityFeed',
            'programs/:program_id/profiles/:user_id' : 'programProfile'

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
        programProfile: function(program_id, user_id){

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
        new NavigationView();
    };
    return {
        initialize: initialize
    };
});