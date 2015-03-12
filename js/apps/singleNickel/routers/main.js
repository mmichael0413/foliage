define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        SurveyBuilder = require('singleNickel/views/survey/build/builder'),
        SurveyModel = require('singleNickel/models/survey/build/survey'),
        SectionModel = require('singleNickel/models/survey/build/section'),
        QuestionModel = require('singleNickel/models/survey/build/question'),
        ChoiceModel = require('singleNickel/models/survey/build/choice'),
        SectionCollection = require('singleNickel/collections/survey/build/sections'),
        QuestionCollection = require('singleNickel/collections/survey/build/questions'),
        ChoiceCollection = require('singleNickel/collections/survey/build/choices');


    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            '': 'listSurveys',
            ':program_id/survey(/index)(/)': 'listSurveys',
            ':program_id/survey/create(/)': 'createSurvey',
            ':program_id/survey/:id(/)': 'showSurvey',
            ':program_id/survey/:id/edit(/)': 'editSurvey',
            ':program_id/survey/build/:id': 'buildSurvey'
        },

        before: function (parameters) {
            // in addition, the router stuffs all arguments as a list on context.requestParameters;
            context.programId = parameters[0];
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
        },

        listSurveys: function() {
            console.log('listSurveys');
        },

        createSurvey: function(){
            console.log('createSurvey');
        },

        showSurvey: function() {
            console.log('showSurvey');
        },

        editSurvey: function() {
            console.log('editSurvey');
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