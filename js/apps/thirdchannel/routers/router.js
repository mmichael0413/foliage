define(function(require){

    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        FilterParams = require('shared/models/filterParams'),
        MainLayout = require('shared/views/layout/main'),
        ActionsDropDown = require('thirdchannel/views/shared/actions'),
        AdminActivitiesTopicsView = require('thirdchannel/views/admin/activities/topics'),
        ActivitiesMain = require('thirdchannel/views/activities/main'),
        CheckinsListView = require('thirdchannel/views/checkins/list'),
        CheckinsEditView = require('thirdchannel/views/checkins/edit'),
        AddActivitiesView = require('thirdchannel/views/checkins/activities/add'),
        ManageActivitiesView = require('thirdchannel/views/checkins/activities/manage'),
        TeamsMain = require('thirdchannel/views/teams/main'),
        StoresMain = require('thirdchannel/views/stores/main'),
        StoreProfileMain = require('thirdchannel/views/store_profile/main'),
        StoresIntelEdit = require('thirdchannel/views/stores/intel/edit'),
        StoreProfileProductsEdit = require('thirdchannel/views/store_profile/products/edit'),
        StoreProfileSalesMain = require('thirdchannel/views/store_profile/sales/main'),
        PersonnelSectionView = require('thirdchannel/views/store_profile/personnel'),
        SurveyView = require('thirdchannel/views/checkins/show/survey'),
        SurveyModel = require('thirdchannel/models/checkins/show/form'),
        DashboardsAlertsSectionsView = require('thirdchannel/views/dashboards/alerts/index/sections'),
        DashboardsAlertsStoresView = require('thirdchannel/views/dashboards/alerts/show/stores'),
        DashboardsSpecialProjectsView = require('thirdchannel/views/dashboards/special_projects/main'),
        DashboardsSpecialProjectStoresMain = require('thirdchannel/views/dashboards/special_projects/stores/main'),
        FixturesMain = require('thirdchannel/views/fixtures/main'),
        ReportMain = require('thirdchannel/views/reports/index/main'),
        FieldActivitiesMain = require('thirdchannel/views/reports/field_activity/index/main'),
        CheckinReportView = require('thirdchannel/views/reports/checkins/show/report'),
        ReportBreakdownMain = require('thirdchannel/views/reports/breakdown/show/main'),
        ReportInfoMain = require('thirdchannel/views/reports/info/show/main'),
        ContentView = require('thirdchannel/views/global/content_view'),
        NotificationSectionView = require('thirdchannel/views/notifications/notification_section'),
        PostView = require('thirdchannel/views/posts/main'),
        NotificationBadge = require('thirdchannel/views/notifications/notification_badge'),
        Labs = require('thirdchannel/views/labs/main'),
        ViewOpportunity = require('thirdchannel/views/opportunities/main'),
        ViewOpportunities = require('thirdchannel/views/opportunities/list'),
        AnswersExportView = require('thirdchannel/views/exports/answers/main'),
        SalesStoresExportView = require('thirdchannel/views/exports/sales_stores/main'),
        SalesStoresAuditExportView = require('thirdchannel/views/exports/sales_stores_audit/main'),
        RoiExportView = require('thirdchannel/views/exports/roi/main'),
        DataClipsExportView = require('thirdchannel/views/exports/data_clips/main'),
        ProgramProfileView = require('erudition/views/profile/view_profile'),
        ProgramProfileEditView = require('erudition/views/profile/edit'),
        programProfileSecurityView = require('erudition/views/profile/security'),
        ProfileStoreListView = require('thirdchannel/views/profiles/stores/list'),
        ProfileAdminView = require('thirdchannel/views/profiles/admin/main'),
        ApplicationView = require('thirdchannel/views/application/main'),
        FlashView = require('thirdchannel/views/shared/flash'),
        LoginView = require('thirdchannel/views/authentication/login'),
        ScheduledVisitsView = require('thirdchannel/views/scheduled_visits/scheduled_visits'),
        JobRequestsView = require('thirdchannel/views/manage/jobs/list'),
        ContractView = require('thirdchannel/views/legal/contract'),
        ManageJobsMain = require('thirdchannel/views/manage/jobs/main');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            'agents/opportunities/:program_id/applications/:id' : 'viewApplication',
            'agents/profile(/)' : 'programProfile',
            'agents/profile/edit(/)': 'programProfileEdit',
            'agents/profile/security(/)': 'programProfileSecurity',
            'login' : 'login',
            'opportunities': 'ViewOpportunities',
            'opportunities/:id': 'viewOpportunity',
            'programs/:program_id/admin/activities/topics(/)' : 'adminActivitiesTopics',
            'programs/:program_id/admin/activities/topics/*path' : 'adminActivitiesTopics',
            'programs/:program_id/manage/jobs/new': 'createJobRequest',
            'programs/:program_id/manage/jobs/:id/edit': 'updateJobRequest',
            'programs/:program_id/manage/jobs/:id(/)': 'viewJobRequest',
            'programs/:program_id/activities' : 'activitiesFeed',
            'programs/:program_id/activities/:activity_id' : 'activityFeed',
            'programs/:program_id/profiles/:user_id' : 'programProfile',
            'programs/:program_id/profiles/:user_id/activities' : 'programProfileActivity',
            'programs/:program_id/profiles/:user_id/stores': 'programProfileStores',
            'programs/:program_id/profiles/:user_id/admin': 'programProfileAdmin',
            'programs/:program_id/profiles/:user_id/edit': 'programProfileEdit',
            'programs/:program_id/profiles/:user_id/security': 'programProfileSecurity',
            'programs/:program_id/checkins(/)' : 'checkinsList',
            'programs/:program_id/checkins/:id(/)' : 'checkinsEdit',
            'programs/:program_id/checkins/:checkin_id/activities/add(/)' : 'addActivities',
            'programs/:program_id/checkins/:checkin_id/activities/manage(/)' : 'manageActivities',
            'programs/:program_id/teams(/)': 'teams',
            'programs/:program_id/stores(/)': 'stores',
            'programs/:program_id/stores/:store_id(/)': 'storeProfile',
            'programs/:program_id/stores/:store_id/intel': 'storeProfileIntel',
            'programs/:program_id/stores/:store_id/activity': 'storeProfileActivity',
            'programs/:program_id/stores/:store_id/history': 'storeProfileHistory',
            'programs/:program_id/stores/:store_id/gallery': 'storeProfileGallery',
            'programs/:program_id/stores/:store_id/product': 'storeProfileProduct',
            'programs/:program_id/stores/:store_id/product/edit': 'editStoreProfileProduct',
            'programs/:program_id/stores/:store_id/intel/edit': 'editStoreIntel',
            'programs/:program_id/stores/:store_id/fixtures': 'storeProfileFixtures',
            'programs/:program_id/stores/:store_id/sales': 'storeProfileSales',
            'programs/:program_id/stores/:store_id/people': 'storeProfilePeople',
            'programs/:program_id/checkins/:checkin_id/submissions/:id': 'submission',
            'programs/:program_id/dashboards/alerts': 'dashboardAlerts',
            'programs/:program_id/dashboards/alerts/:id': 'dashboardAlert',
            'programs/:program_id/dashboards/special_projects/:special_project_id/stores': 'dashboardSpecialProjectStores',
            'programs/:program_id/fixture_tracking/summary(/)' : 'fixturesSummary',
            'programs/:program_id/fixture_tracking/types(/)' : 'fixturesTypes',
            'programs/:program_id/fixture_tracking/fixtures(/)' : 'fixturesList',
            'programs/:program_id/fixture_tracking/problems(/)': 'problemsList',
            'programs/:program_id/reports': 'reports',
            'programs/:program_id/reports.pdf': 'reports',
            'programs/:program_id/reports/field_activities': 'fieldActivities',
            'programs/:program_id/reports/field_activities/breakdown/:type': 'reportBreakdown',
            'programs/:program_id/reports/checkin/:id': 'checkinReport',
            'programs/:program_id/reports/:report_id/info/:id': 'reportInfo',
            'programs/:program_id/legal/new(/)': 'signContract',
            'programs/:program_id/notifications' : 'notificationList',
            'programs/:program_id/posts/new' : 'newPost',
            'programs/:program_id/labs/sku_sales': 'labsSkus',
            'programs/:program_id/labs(/)': 'labsSalesCompare',
            'programs/:program_id/labs/sales_comparison': 'labsSalesCompare',
            'programs/:program_id/exports/roi': 'exportsRoi',
            'programs/:program_id/exports/survey_answers': 'answerExports',
            'programs/:program_id/exports/sales_stores': 'salesStoresExports',
            'programs/:program_id/exports/sales_stores_audits': 'salesStoresAuditExports',
            'programs/:program_id/visits': 'visits',
            'programs/:program_id/manage/jobs': 'jobRequests',

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
            context.defaultLegendColors = ["#2FB44A", "#4D87C6", "#3D459C", "#515759", "#BDC5C4"];

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

        adminActivitiesTopics: function(){
            new AdminActivitiesTopicsView().render();
        },

        activitiesFeed: function(){
            var url = '/programs/' + context.programId + '/activities/posts';
            var incompleteUrl =  '/programs/' + context.programId + '/activities/incomplete_posts';
            ActivitiesMain.init(url, incompleteUrl, false);
        },

        activityFeed: function(programId, activityId) {
            var url = '/programs/' + programId + '/activities/' + activityId;
            ActivitiesMain.init(url, null, true);
        },

        adminView: function() {
            new FlashView();
        },

        checkinsList: function (){
            CheckinsListView.init();
        },

        fixturesSummary: function() {
            FixturesMain.index();
        },

        fixturesTypes: function () {
            FixturesMain.types();
        },

        fixturesList: function () {
            FixturesMain.detailsList();
        },

        problemsList: function() { FixturesMain.problemsList(); },

        checkinsEdit: function (){
            new ActionsDropDown().render();
            new CheckinsEditView({model: window.bootstrap}).render();
        },

        addActivities: function (){
            new ActionsDropDown().render();
            AddActivitiesView.init();
        },

        manageActivities: function (){
            new ActionsDropDown().render();
            ManageActivitiesView.init();
        },

        teams: function () {
            TeamsMain.init();
        },

        viewOpportunity: function() {
            new ViewOpportunity();
        },

        ViewOpportunities: function() {
            new ViewOpportunities();
        },

        stores: function () {
            StoresMain.init();
        },

        storeProfile: function () {
            StoreProfileMain.init();
        },

        storeProfileIntel: function () {
            StoreProfileMain.intel();
        },

        storeProfileActivity: function () {
            StoreProfileMain.activity();
        },

        storeProfileFixtures: function () {
            StoreProfileMain.fixtures();
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

        storeProfileSales: function() {
            StoreProfileSalesMain.init();
        },

        storeProfilePeople: function() {
            new PersonnelSectionView().fetch();
        },

        programProfile: function() {
            new ProgramProfileView().render();
            new FlashView();
        },

        programProfileEdit: function () {
            new ProgramProfileEditView().render();
            new FlashView();
        },

        programProfileSecurity: function () {
            new programProfileSecurityView().render();
            new FlashView();
        },

        programProfileActivity: function(programId, userId) {
            var url = '/programs/' + programId + '/activities/' + userId + '/for';
            ActivitiesMain.init(url, null, false);
        },

        programProfileStores: function() {
            new ProfileStoreListView().bootstrapCollection(window.bootstrap);
        },

        programProfileAdmin: function() {
            new ProfileAdminView().render();
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

        fieldActivities: function(programId){
            FieldActivitiesMain.init({programId: programId});
        },

        submission: function(programId, checkinId, submissionId) {
            new ActionsDropDown().render();
            new SurveyView({model: new SurveyModel({programId: programId, checkinId: checkinId, submissionId: submissionId})}).render();
        },

        checkinReport: function(programId, id){
            new CheckinReportView({programId: programId, id: id}).render();
        },

        reportBreakdown: function(programId, type){
            ReportBreakdownMain.init({ programId: programId, type: type, filters: location.search });
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

        exportsRoi: function () {
            RoiExportView.roi();
        },

        answerExports: function() {
            new AnswersExportView().render();
        },

        salesStoresExports: function() {
            new SalesStoresExportView().render();
        },

        salesStoresAuditExports: function() {
            new SalesStoresAuditExportView().render();
        },

        signContract: function() {
            new ContractView().render();
        },

        dataClipsExports: function() {
            new DataClipsExportView().render();
            new FlashView();
        },

        viewApplication: function(programId, id) {
            context.programId = programId;
            new ApplicationView({applicationId: id});
        },

        createJobRequest: function() {
            ManageJobsMain.create();
        },

        updateJobRequest: function(programId, id) {
            ManageJobsMain.update(id);
        },

        viewJobRequest: function(programId, id) {
            ManageJobsMain.show(id);
        },

        defaultPath: function(programId) { },

        notFound: function(){
            // This maybe because we're generating a pdf
            if (context.current_report !== undefined && window.report_pdf) {
                ReportMain.init({programId: ""});
            }
        },

        visits: function(){
            new ScheduledVisitsView({model: window.bootstrap});
        },

        jobRequests: function () {
          new JobRequestsView({model: window.bootstrap});
        }
    });

    var initialize = function(){
        namespacer('bootstrap');
        MainLayout.init();
        context.router = new AppRouter();
        context.instances = {};
        context.filterParams = new FilterParams();
    };
    return {
        initialize: initialize
    };
});
