define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        ListView = require('singleNickel/views/survey/list'),
        ShowView = require('singleNickel/views/survey/show'),
        BuilderView = require('singleNickel/views/survey/build/builder'),
        DeleteView = require('singleNickel/views/survey/delete'),
        User = require('singleNickel/models/user'),
        SurveyModel = require('singleNickel/models/survey'),
        SurveyCollection = require('singleNickel/collections/surveys');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            '(/)': 'listSurveys',
            'surveys(/)': 'listSurveys',
            'new(/)': 'buildSurvey',
            'surveys/:id(/)': 'showSurvey',
            'surveys/:id/edit(/)': 'editSurvey',
            'surveys/:id/delete(/)': 'deleteSurvey'
        },

        navigation:  [
            {title: 'View Surveys', link: '/', route:'(/)', icon: 'ic_clipboard'},
            {title: 'Create New Survey',  link: '/new', route:'new(/)', icon: 'ic_add'}
        ],

        before: function (parameters, route, name) {
            // stuff the bootstrap into the context
            _.extend(context, window.bootstrap);
            window.bootstrap.navigation = _.extend(this.navigation, _.extend(_.find(this.navigation, function(obj) { return obj.route == route; }), {active: true}));
        },

        after: function() {
            MainLayout.init();
        },

        listSurveys: function() {
            var surveys = new SurveyCollection();
            surveys.fetch().then(function(response) {
                $('#survey-container').html(new ListView({
                    collection: surveys
                }).render().el);
            });
        },
        buildSurvey: function() {
            $('#survey-container').html(new BuilderView({model: new SurveyModel({})}).render().$el);
        },
        showSurvey: function(surveyId) {
            var survey = new SurveyModel({id: surveyId});
            survey.fetch().done(function(model){
                $('#survey-container').html(new ShowView({model: survey}).render().$el);
            }).fail(function(){
                alert("contact andrew");
            });
        },
        editSurvey: function(surveyId) {
            var survey = new SurveyModel({id: surveyId});
            survey.fetch().success(function(model){
                $('#survey-container').html(new BuilderView({model: survey}).render().$el);
            }).fail(function(){
                alert("contact andrew");
            });
        },
        deleteSurvey: function(surveyId) {
            $('#survey-container').html(new DeleteView({surveyId: surveyId}).render().$el);
        }
    });

    var initialize = function(){
        namespacer('bootstrap');
        context.router = new AppRouter();
        namespacer('context.instances');

        context.currentUser = null;
        if(window.currentUser !== undefined) {
            context.currentUser = new User(window.currentUser);
        }

        Handlebars.registerHelper('isSuperAdmin', function(options) {
            if(context.currentUser.isSuperAdmin()) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });

        Handlebars.registerHelper('lockActionDisplay', function(locked) {
           if(locked) {
               return 'Unlock';
           } else {
               return 'Lock';
           }
        });

        Backbone.history.start({pushState: true, hashChange: false});
    };
    return {
        initialize: initialize
    };
});