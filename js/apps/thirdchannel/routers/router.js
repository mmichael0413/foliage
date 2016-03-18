define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        ActivitiesMain = require('thirdchannel/views/activities/main'),
        CheckinsView = require('thirdchannel/views/checkins/checkin'),
        TeamsMain = require('thirdchannel/views/teams/main'),
        StoresMain = require('thirdchannel/views/stores/main'),
        StoreProfileMain = require('thirdchannel/views/store_profile/main'),
        StoresIntelEdit = require('thirdchannel/views/stores/intel/edit'),
        StoreProfileProductsEdit = require('thirdchannel/views/store_profile/products/edit'),
        StoreProfileSalesMain = require('thirdchannel/views/store_profile/sales/main'),
        SurveyView = require('thirdchannel/views/checkins/show/survey'),
        SurveyModel = require('thirdchannel/models/checkins/show/form'),
        CheckinChooseView = require('thirdchannel/views/checkins/choose/show/main'),
        DashboardsAlertsSectionsView = require('thirdchannel/views/dashboards/alerts/index/sections'),
        DashboardsAlertsStoresView = require('thirdchannel/views/dashboards/alerts/show/stores'),
        DashboardsSpecialProjectsView = require('thirdchannel/views/dashboards/special_projects/main'),
        DashboardsSpecialProjectStoresMain = require('thirdchannel/views/dashboards/special_projects/stores/main'),
        ReportMain = require('thirdchannel/views/reports/index/main'),
        CheckinReportView = require('thirdchannel/views/reports/checkins/show/report'),
        ReportInfoMain = require('thirdchannel/views/reports/info/show/main'),
        ContentView = require('thirdchannel/views/global/content_view'),
        NotificationSectionView = require('thirdchannel/views/notifications/notification_section'),
        PostView = require('thirdchannel/views/posts/main'),
        NotificationBadge = require('thirdchannel/views/notifications/notification_badge'),
        StoreProfileSchedule = require('thirdchannel/views/store_profile/schedule'),
        Labs = require('thirdchannel/views/labs/main'),
        AnswersExportView = require('thirdchannel/views/exports/answers/main'),
        SalesStoresExportView = require('thirdchannel/views/exports/sales_stores/main'),
        DataClipsExportView = require('thirdchannel/views/exports/data_clips/main'),
        ProgramProfileView = require('erudition/views/profile/view_profile'),
        ProgramProfileEditView = require('erudition/views/profile/edit'),
        ProfileStoreListView = require('thirdchannel/views/profiles/stores/list'),
        ApplicationView = require('thirdchannel/views/application/main'),
        AdminView = require('thirdchannel/views/admin/flash'),
        LoginView = require('thirdchannel/views/authentication/login');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            'agents/opportunities/:program_id/applications/:id' : 'viewApplication',
            'agents/profile(/)' : 'programProfile',
            'agents/profile/edit(/)': 'programProfileEdit',

            'login' : 'login',
            'programs/:program_id/activities' : 'activitiesFeed',
            'programs/:program_id/activities/:activity_id' : 'activityFeed',
            'programs/:program_id/profiles/:user_id' : 'programProfile',
            'programs/:program_id/profiles/:user_id/activities' : 'programProfileActivity',
            'programs/:program_id/profiles/:user_id/stores': 'programProfileStores',
            'programs/:program_id/profiles/:user_id/edit': 'programProfileEdit',
            'programs/:program_id/checkins(/)' : 'checkin_list',
            'programs/:program_id/teams(/)': 'teams',
            'programs/:program_id/stores(/)': 'stores',
            'programs/:program_id/stores/:store_id(/)': 'storeProfile',
            'programs/:program_id/stores/:store_id/activity': 'storeProfileActivity',
            'programs/:program_id/stores/:store_id/history': 'storeProfileHistory',
            'programs/:program_id/stores/:store_id/gallery': 'storeProfileGallery',
            'programs/:program_id/stores/:store_id/product': 'storeProfileProduct',
            'programs/:program_id/stores/:store_id/product/edit': 'editStoreProfileProduct',
            'programs/:program_id/stores/:store_id/intel/edit': 'editStoreIntel',
            'programs/:program_id/stores/:store_id/schedule' : 'storeProfileSchedule',
            'programs/:program_id/stores/:store_id/sales': 'storeProfileSales',
            'programs/:program_id/checkins/:checkin_id/submissions/:id': 'submission',
            'programs/:program_id/checkins/choose/:id': 'selectCheckin',
            'programs/:program_id/dashboards/alerts': 'dashboardAlerts',
            'programs/:program_id/dashboards/alerts/:id': 'dashboardAlert',
            'programs/:program_id/dashboards/special_projects/:special_project_id/stores': 'dashboardSpecialProjectStores',
            'programs/:program_id/reports': 'reports',
            'programs/:program_id/reports.pdf': 'reports',
            'programs/:program_id/reports/checkin/:id': 'checkinReport',
            'programs/:program_id/reports/:report_id/info/:id': 'reportInfo',
            'programs/:program_id/notifications' : 'notificationList',
            'programs/:program_id/posts/new' : 'newPost',
            'programs/:program_id/labs/sku_sales': 'labsSkus',
            'programs/:program_id/labs(/)': 'labsSalesCompare',
            'programs/:program_id/labs/sales_comparison': 'labsSalesCompare',
            'programs/:program_id/labs/roi': 'labsRoi',
            'programs/:program_id/exports/survey_answers': 'answerExports',
            'programs/:program_id/exports/sales_stores': 'salesStoresExports',

            'admin/data_clips(/)': 'dataClipsExports',
            'admin/*path' : 'adminView',

            'programs/:program_id/*path' : 'defaultPath',
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
            context.defaultLegendColors = ["#F15F51", "#9FB2C0", "#585E60", "#A9BC4D", "#8079b8", "#85c194", "#deb99a", "#bce4f9", "#f69d6d", "#8ab2ca", "#a53426", "#8c8d8e", "#00a55a", "#deb99a", "#ef6222", "#4cc3f1", "#025832"];

            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
        },

        after: function(args) {
            // this check is used now because there are some routes that do not contain the program_id in the url
            if(args.length > 0 && args[0] !== null) {
                new NotificationBadge().render();
            }
        },

        login: function () {
            new LoginView();
        },

        activitiesFeed: function(){
            var url = '/programs/' + context.programId + '/activities/posts';
            var incomplete_url =  '/programs/' + context.programId + '/activities/incomplete_posts';
            ActivitiesMain.init(url, incomplete_url, false);
        },

        activityFeed: function(program_id, activity_id) {
            var url = '/programs/' + program_id + '/activities/' + activity_id;
            ActivitiesMain.init(url, null, true);
        },

        adminView: function() {
            new AdminView();
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

        storeProfileProduct: function () {
            StoreProfileMain.product();
        },

        editStoreProfileProduct: function () {
            StoreProfileProductsEdit.init();
        },

        editStoreIntel: function () {
            new StoresIntelEdit().render();
        },

        storeProfileSchedule: function() {
            new StoreProfileSchedule().init();
        },

        storeProfileSales: function() {
            StoreProfileSalesMain.init();
        },

        programProfile: function(program_id, user_id) {
            new ProgramProfileView().render();
        },

        programProfileEdit: function () {
            new ProgramProfileEditView().render();
        },

        programProfileActivity: function(program_id, user_id) {
            var url = '/programs/' + program_id + '/activities/' + user_id + '/for';
            ActivitiesMain.init(url, null, false);
        },

        programProfileStores: function(program_id, user_id) {
            new ProfileStoreListView().bootstrapCollection(window.bootstrap);
        },

        dashboardAlerts: function(programId) {
            new DashboardsSpecialProjectsView({programId: programId}).render();
            $('#alerts-dashboard').append(new DashboardsAlertsSectionsView({programId: programId}).render().$el);
        },

        dashboardSpecialProjectStores: function(programId, specialProjectId) {
            DashboardsSpecialProjectStoresMain.init();
        },

        dashboardAlert: function(programId, id){
            new DashboardsAlertsStoresView({programId: programId, id: id}).render();
        },

        reports: function(programId){
            ReportMain.init({programId: programId});
        },

        submission: function(programId, checkinId, submissionId) {
            new SurveyView({model: new SurveyModel({programId: programId, checkinId: checkinId, submissionId: submissionId})}).render();
        },

        selectCheckin : function(programId, id) {
            new CheckinChooseView({programId: programId, id: id}).render();
        },

        checkinReport: function(programId, id){
            new CheckinReportView({programId: programId, id: id}).render();
        },

        reportInfo: function(programId, reportId, infoId){
            ReportInfoMain.init({programId: programId,reportId: reportId, infoId: infoId});
        },

        notificationList: function(programId) {
            new ContentView();
            var unreadView = new NotificationSectionView({el: '.new-notifications', url_action: 'unread', emptyParams: {unread: 'new'}, bootstrap: window.unread}).start();
            var readView = new NotificationSectionView({el: '.past-notifications', url_action: 'read', bootstrap: window.read}).start();
        },

        newPost: function(){
            new PostView();
        },

        labsSkus: function () {
            Labs.skus();
        },

        labsSalesCompare: function () {
            Labs.salesCompare();
        },

        labsRoi: function () {
            Labs.roi();
        },

        answerExports: function() {
            new AnswersExportView().render();
        },

        salesStoresExports: function() {
            new SalesStoresExportView().render();
        },

        dataClipsExports: function() {
            new DataClipsExportView().render();
            new AdminView();
        },

        viewApplication: function(program_id, id) {
            context.programId = program_id;
            new ApplicationView({applicationId: id});
        },

        defaultPath: function(program_id) {


        },

        notFound: function(){
            // This maybe because we're generating a pdf
            if (context.current_report !== undefined && window.report_pdf) {
                ReportMain.init({programId: ""});
            }
        }
    });

    var initialize = function(){
        namespacer('bootstrap');
        MainLayout.init();
        context.router = new AppRouter();
        context.instances = {};
    };
    return {
        initialize: initialize
    };
});
