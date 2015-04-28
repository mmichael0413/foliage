define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        Noty = require('noty'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        ListView = require('singleNickel/views/survey/list'),
        ShowView = require('singleNickel/views/survey/show'),
        BuilderView = require('singleNickel/views/survey/build/builder'),
        DeleteView = require('singleNickel/views/survey/delete'),
        User = require('singleNickel/models/user'),
        SurveyModel = require('singleNickel/models/survey'),
        SurveyCollection = require('singleNickel/collections/surveys'),
        Customers = require('singleNickel/collections/customers');

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
            {title: 'View Surveys', link: '/', route:'(/)', icon: 'ic_clipboard', active: false},
            {title: 'Create New Survey',  link: '/new', route:'new(/)', icon: 'ic_add', active: false}
        ],

        initialize: function() {
            window.bootstrap.navigation = _.clone(this.navigation);
            this.listenTo(context, 'error', this.displayError);
        },

        before: function (parameters, route, name) {
            _.each(window.bootstrap.navigation, function(nav) {
                nav.active = false;
            });

            var activeNavigation = _.find(window.bootstrap.navigation, function(obj) { return obj.route == route; });
            if(activeNavigation !== undefined) {
                _.extend(window.bootstrap.navigation, _.extend(activeNavigation, {active: true}));
            }

            context.trigger('navigation:changed');
        },

        listSurveys: function() {
            var surveys = new SurveyCollection();
            surveys.fetch().then(function(response) {
                $('#survey-container').html(new ListView({collection: surveys}).render().el);
            }).fail(function() {
                context.trigger('error');
            });
        },
        buildSurvey: function() {
            $('#survey-container').html(new BuilderView({model: new SurveyModel({})}).render().el);
        },
        showSurvey: function(surveyId) {
            var survey = new SurveyModel({id: surveyId});
            survey.fetch().done(function(model){
                $('#survey-container').html(new ShowView({model: survey}).render().el);
            }).fail(function(){
                context.trigger('error');
            });
        },
        editSurvey: function(surveyId) {
            var survey = new SurveyModel({id: surveyId});
            survey.fetch().success(function(model) {
                $('#survey-container').html(new BuilderView({model: survey}).render().el);
            }).fail(function(){
                context.trigger('error');
            });
        },
        deleteSurvey: function(surveyId) {
            $('#survey-container').html(new DeleteView({surveyId: surveyId}).render().el);
        },

        displayError: function() {
            noty({
                layout: 'topRight',
                text: 'Whoops, something went wrong... Contact tech support.',
                type: 'error',
                animation: {
                    open: {height: 'toggle'},
                    close: {height: 'toggle'},
                    easing: 'swing',
                    speed: 500
                },
                timeout: 2500
            });
        }
    });

    var initialize = function() {
        namespacer('bootstrap');
        context.router = new AppRouter();
        namespacer('context.instances');

        context.customers = new Customers(window.customers);

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

        Handlebars.registerHelper('isAdmin', function(options) {
            if(context.currentUser.isAdmin()) {
                return options.fn(this);
            } else {
                return options.inverse(this);
            }
        });

        Handlebars.registerHelper('lockDisplay', function(locked) {
            if(locked) {
                return 'Locked';
            } else {
                return 'Unlocked';
            }
        });

        Handlebars.registerHelper('unlessFirstChild', function(object, options) {
            var index = object.collection.indexOf(object);
            if(index !== 0) {
                return options.fn(this);
            }
        });

        Handlebars.registerHelper('unlessLastChild', function(object, options) {
            var index = object.collection.indexOf(object),
                lastIndex = object.collection.indexOf(object.collection.last());
            if(index != lastIndex) {
                return options.fn(this);
            }
        });

        Handlebars.registerHelper('displaySurveyType', function(survey) {
            return survey.surveyType();
        });

        Backbone.history.start({pushState: true, hashChange: false});

        MainLayout.init();
    };
    return {
        initialize: initialize
    };
});