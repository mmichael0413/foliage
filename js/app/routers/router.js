define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        MainLayout = require('app/views/layout/main'),
        ActivitiesMain = require('app/views/activities/main'),
        CheckinsView = require('app/views/checkins/checkin'),
        TeamsMain = require('app/views/teams/main'),
        StoresMain = require('app/views/stores/main'),
        StoreProfileMain = require('app/views/store_profile/main'),
        StoresIntelEdit = require('app/views/stores/intel/edit'),
        CheckinView = require('app/views/checkins/show/checkin'),
        DashboardsAlertsSectionsView = require('app/views/dashboards/alerts/index/sections'),
        DashboardsAlertsStoresView = require('app/views/dashboards/alerts/show/stores'),
        ReportMain = require('app/views/reports/index/main'),
        CheckinReportView = require('app/views/reports/checkins/show/report'),
        ReportInfoMain = require('app/views/reports/info/show/main'),
        ContentView = require('app/views/global/content_view'),
        NotificationSectionView = require('app/views/notifications/notification_section'),
        ShippingView = require('app/views/legal/shipping'),
        PostView = require('app/views/posts/main');

    var AppRouter = require('app/routers/contextAwareBaseRouter').extend({
        routes: {
            'programs/:program_id/activities' : 'activitiesFeed',
            'programs/:program_id/activities/:activity_id' : 'activityFeed',
            'programs/:program_id/profiles/:user_id' : 'programProfile',
            'programs/:program_id/checkins' : 'checkin_list',
            'programs/:program_id/teams(/)': 'teams',
            'programs/:program_id/stores(/)': 'stores',
            'programs/:program_id/stores/:store_id(/)': 'storeProfile',
            'programs/:program_id/stores/:store_id/activity': 'storeProfileActivity',
            'programs/:program_id/stores/:store_id/history': 'storeProfileHistory',
            'programs/:program_id/stores/:store_id/gallery': 'storeProfileGallery',
            'programs/:program_id/stores/:store_id/intel/edit': 'editStoreIntel',
            'programs/:program_id/checkins/:id': 'checkin',
            'programs/:program_id/dashboards/alerts': 'dashboardAlerts',
            'programs/:program_id/dashboards/alerts/:id': 'dashboardAlert',
            'programs/:program_id/reports': 'reports',
            'programs/:program_id/reports.pdf': 'reports',
            'programs/:program_id/reports/checkin/:id': 'checkinReport',
            'programs/:program_id/reports/:report_id/info/:id': 'reportInfo',
            'programs/:program_id/notifications' : 'notificationList',
            'programs/:program_id/legal/shipping' : 'shippingForm',
            'programs/:program_id/posts/new' : 'newPost',

            '*path': 'notFound'
        },
        // Small hack to add a before and after function to the Router
        /**
         * A before filter for this router. Currently only sets the program id, but attaches the requestArguments, in order
         * of the filter.
         *
         * For more indepth usage we'd need to split the routers up so that each one has a more fine-grained before function (e.g., a 'stores'
         * router that knows the second parameter is always storeID, and a reports router that knows the second param is always report_id)
         * 
         * @param  {string} program_id [description]
         */
        before: function (parameters) {
            // in addition, the router stuffs all arguments as a list on context.requestParameters;
            context.programId = parameters[0];
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
        },

        activitiesFeed: function(program_id){
            var url = '/programs/' + context.programId + '/activities/posts';
            var incomplete_url =  '/programs/' + context.programId + '/activities/incomplete_posts';
            ActivitiesMain.init(url, incomplete_url, true);
        },
        activityFeed: function(program_id, activity_id) {
            var url = '/programs/' + program_id + '/activities/' + activity_id;
            ActivitiesMain.init(url, null, false);
        },

        checkin_list: function (program_id, user_id){
            CheckinsView.init();
        },

        teams: function () {
            TeamsMain.init();
        },

        stores: function () {
            StoresMain.init();
        },

        storeProfile: function () {
            StoreProfileMain.init();
        },

        storeProfileActivity: function () {
            StoreProfileMain.activity();
        },

        storeProfileHistory: function () {
            StoreProfileMain.history();
        },

        storeProfileGallery: function () {
            StoreProfileMain.gallery();
        },

        editStoreIntel: function () {
            new StoresIntelEdit().render();
        },

        programProfile: function(program_id, user_id) {
            var url = '/programs/' + program_id + '/activities/' + user_id + '/for';
            ActivitiesMain.init(url, null, true);
        },

        dashboardAlerts: function(programId){
            $('.dashboard').append(new DashboardsAlertsSectionsView({programId: programId}).render().$el);
        },

        dashboardAlert: function(programId, id){
            new DashboardsAlertsStoresView({id: id, page: ""}).render();
        },

        reports: function(programId){
            ReportMain.init({programId: programId});
        },

        checkin : function(programId, id) {
            new CheckinView({programId: programId, checkinId: id}).render();
        },

        checkinReport: function(programId, id){
            new CheckinReportView({programId: programId}).render();
        },

        reportInfo: function(programId, reportId, infoId){
            ReportInfoMain.init({programId: programId,reportId: reportId, infoId: infoId});
        },

        notificationList: function(programId) {
            new ContentView();
            var unreadView = new NotificationSectionView({el: '.new-notifications', url_action: 'unread', emptyParams: {unread: 'new'}, bootstrap: window.unread}).start();
            var readView = new NotificationSectionView({el: '.past-notifications', url_action: 'read', bootstrap: window.read}).start();
        },

        shippingForm: function(){
            ShippingView.init();
        },

        newPost: function(){
            new PostView();

        },

        notFound: function(){
            // This maybe because we're generating a pdf
            if (window.reportData !== undefined) {
                ReportMain.init({programId: ""});
            }
        }
    });

    var initialize = function(){
        MainLayout.init();
        context.router = new AppRouter();
        context.instances = {};
        Backbone.history.start({pushState: true, hashChange: false});
    };
    return {
        initialize: initialize
    };
});