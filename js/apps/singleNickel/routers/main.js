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
            '': 'listSurveys',
            'new': 'buildSurvey'
        },

        before: function (parameters) {
            // in addition, the router stuffs all arguments as a list on context.requestParameters;
            context.programId = parameters[0];
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
        },

        listSurveys: function() {
            console.log('listSurveys');
            var surveys = new SurveyCollection();

            surveys.fetch().then(function(response) {
                $('#survey-container').html(new SurveyListView({
                    collection: surveys
                }).render().el);
            });
        },
        buildSurvey: function(program_id, survey) {
            $('#survey-container').html(new SurveyBuilder({model: new SurveyModel()}).render().$el);
        }
    });

    var initialize = function(){
        namespacer('bootstrap');
        MainLayout.init();
        context.router = new AppRouter();
        namespacer('context.instances');
        Backbone.history.start({pushState: true, hashChange: false});
    };
    return {
        initialize: initialize
    };
});