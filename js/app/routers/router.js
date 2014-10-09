define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        GlobalView = require('app/views/activities/global'),
        ActivitiesView = require('app/views/activities/activities'),
        TeamsMain = require('app/views/teams/main');



    var AppRouter = Backbone.Router.extend({
        routes: {
            'programs/:program_id/activities' : 'activityFeed',
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
            console.log("In teams");
            TeamsMain.init();
        }
    });

    var initialize = function(){
        var app_router = new AppRouter();
        Backbone.history.start({pushState: true});
    };
    return {
        initialize: initialize
    };
});