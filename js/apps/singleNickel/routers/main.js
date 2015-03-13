define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        SurveyListView = require('singleNickel/views/survey/list'),
        SurveyBuilder = require('singleNickel/views/survey/build/builder'),
        SurveyModel = require('singleNickel/models/survey/build/survey'),
        SurveyCollection = require('singleNickel/collections/survey/surveys');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            '(/)': 'listSurveys',
            'new(/)': 'buildSurvey'
        },

        navigation:  [
            {title: 'View Surveys', link: '/', route:'(/)', icon: 'ic_clipboard'},
            {title: 'Create New Survey',  link: 'new', route:'new(/)', icon: 'ic_add'}
        ],

        before: function (parameters, route, name) {
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
            window.bootstrap.navigation = _.extend(this.navigation, _.extend(_.find(this.navigation, function(obj) { return obj.route == route }), {active: true}));
        },

        listSurveys: function() {
            console.log('listSurveys');

            window.bootstrap.navigation = _.extend(this.navigation,
                _.extend(_.find(this.navigation, function(obj) { return obj.title == 'Surveys' }),
                    {active: true}));

            var surveys = new SurveyCollection();

            surveys.fetch().then(function(response) {
                $('#survey-container').html(new SurveyListView({
                    collection: surveys
                }).render().el);
            });
        },
        buildSurvey: function(program_id, survey) {
            window.bootstrap.navigation = _.extend(this.navigation,
                _.extend(_.find(this.navigation, function(obj) { return obj.title == 'Create' }),
                    {active: true}));

            $('#survey-container').html(new SurveyBuilder({model: new SurveyModel()}).render().$el);
        },
        after: function() {
            MainLayout.init();
        }
    });

    var initialize = function(){
        namespacer('bootstrap');
        context.router = new AppRouter();
        namespacer('context.instances');
        Backbone.history.start({pushState: true, hashChange: false});
    };
    return {
        initialize: initialize
    };
});