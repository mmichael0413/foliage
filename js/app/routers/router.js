define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        MainLayout = require('app/views/layout/main'),
        GlobalView = require('app/views/activities/global'),
        ActivitiesView = require('app/views/activities/activities'),
        TeamsMain = require('app/views/teams/main'),
        StoresMain = require('app/views/stores/main'),
        StoreProfileMain = require('app/views/store_profile/main'),
        DashboardsAlertsSectionsView = require('app/views/dashboards/alerts/index/sections'),
        DashboardsAlertsStoresView = require('app/views/dashboards/alerts/show/stores'),
        ReportView = require('app/views/reports/index/report'),
        CheckinReportView = require('app/views/reports/checkins/show/report'),
        ReportInfoView = require('app/views/reports/info/show/info_list'),
        NotificationSectionView = require('app/views/notifications/notification_section');

    // Small hack to add a before and after function to the Router


    //var AppRouter = Backbone.Router.extend({
    var AppRouter = require('app/routers/contextAwareBaseRouter').extend({
        routes: {
            'programs/:program_id/activities' : 'activitiesFeed',
            'programs/:program_id/activities/:activity_id' : 'activityFeed',
            'programs/:program_id/profiles/:user_id' : 'programProfile',
            'programs/:program_id/teams(/)': 'teams',
            'programs/:program_id/stores(/)': 'stores',
            'programs/:program_id/stores/:store_id(/)': 'store_profile',
            'programs/:program_id/dashboards/alerts': 'dashboardAlerts',
            'programs/:program_id/dashboards/alerts/:id': 'dashboardAlert',
            'programs/:program_id/reports': 'reports',
            'programs/:program_id/reports.pdf': 'reports',
            'programs/:program_id/reports/checkin/:id': 'checkinReport',
            'programs/:program_id/reports/:report_id/info/:id': 'reportInfo',
            'programs/:program_id/notifications' : 'notificationList',

            '*path': 'notFound'
        },

        /**
         * A before filter for this router. Currently only sets the program id, but attaches the requestArguments, in order
         * of the filter.
         *
         * For more indepth usage we'd need to split the routers up so that each one has a more fine-grained before function (e.g., a 'stores'
         * router that knows the second parameter is always storeID, and a reports router that knows the second param is always report_id)
         * 
         * @param  {string} program_id [description]
         */
        before: function (program_id) {
            // in addition, the router stuffs all arguments as a list on context.requestParameters;
            context.program_id = program_id;
        },

        activitiesFeed: function(program_id){

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
        activityFeed: function(program_id, activity_id) {
            var queryString = window.location.search;
            var url = '/programs/' + program_id + '/activities/' + activity_id;

            new GlobalView();
            var activitiesView = new ActivitiesView({
                url: url,
                programId: program_id
            });
            activitiesView.fetch();
        },

        teams: function () {
            TeamsMain.init();
        },

        stores: function () {
            StoresMain.init();
        },

        store_profile: function (programId, storeId) {
            window.context = context;
            StoreProfileMain.init();
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

        },

        dashboardAlerts: function(programId){
            $('.dashboard').append(new DashboardsAlertsSectionsView({programId: programId}).render().$el);
        },

        dashboardAlert: function(programId, id){
            new DashboardsAlertsStoresView({id: id, page: ""}).render();
        },

        reports: function(programId){
            new ReportView({programId: programId}).render();
        },

        checkinReport: function(programId, id){
            new CheckinReportView({programId: programId}).render();
        },

        reportInfo: function(programId, reportId, infoId){
            new ReportInfoView({programId: programId,reportId: reportId, infoId: infoId}).render();
        },

        notificationList: function(programId) {
            new NotificationSectionView({el: '.new-notifications', url_action: 'unread', emptyParams: {unread: 'new'}, bootstrap: window.unread}).start();
            new NotificationSectionView({el: '.past-notifications', url_action: 'read', bootstrap: window.read}).start();
        },

        notFound: function(){
            // This maybe because we're generating a pdf
            if (window.reportData !== undefined) {
                new ReportView({programId: ''}).render();
            }
        }
    });

    var initialize = function(){
        MainLayout.init();
        new AppRouter();
        Backbone.history.start({pushState: true});
        
    };
    return {
        initialize: initialize
    };
});