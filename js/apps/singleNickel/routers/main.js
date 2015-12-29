define(function(require){
    var $ = require('jquery'),
        _ = require('underscore'),
        Backbone = require('backbone'),
        Handlebars = require('handlebars'),
        Noty = require('noty'),
        context = require('context'),
        namespacer = require('shared/utils/namespacer'),
        MainLayout = require('shared/views/layout/main'),
        CustomerListView = require('singleNickel/views/customer/list'),
        SurveyListView = require('singleNickel/views/survey/list'),
        ShowView = require('singleNickel/views/survey/show'),
        BuilderView = require('singleNickel/views/survey/build/builder'),
        DeleteView = require('singleNickel/views/survey/delete'),
        User = require('singleNickel/models/user'),
        SurveyModel = require('singleNickel/models/survey'),
        SurveyCollection = require('singleNickel/collections/surveys'),
        Customers = require('singleNickel/collections/customers');

    var AppRouter = require('shared/routers/contextAwareBaseRouter').extend({
        routes: {
            '(/)': 'listCustomers',
            ':customerId/surveys(/)': 'listSurveys',
            ':customerId/new(/)': 'buildSurvey',
            'surveys/:id(/)': 'showSurvey',
            'surveys/:id/edit(/)': 'editSurvey',
            'surveys/:id/delete(/)': 'deleteSurvey'
        },

        navigation:  [
            {title: 'View Customers', link: '/', route: '(/)', icon: 'ic_star', active: false, hidden: false},
            {title: 'View Surveys', link: '/:customerId/surveys', route:':customerId/surveys(/)', icon: 'ic_clipboard', active: false, hidden: true},
            {title: 'Create New Survey',  link: '/:customerId/new', route:':customerId/new(/)', icon: 'ic_add', active: false, hidden: true}
        ],

        showSurveyLink: [
            ":customer/surveys(/)",
            "surveys/:id(/)",
            "surveys/:id/edit(/)"
        ],

        initialize: function() {
            this.listenTo(context, 'error', this.displayError);
        },

        before: function (parameters, route, name) {
            window.bootstrap.navigation = [];

            if (route.indexOf(":customerId") > -1) {
                context.customerId = parameters[0];
            } else if (route === '(/)') {
                context.customerId = undefined;
            }

            _.each(this.navigation, function(nav) {
                var navItem = _.clone(nav);
                if (navItem.route == route) {
                    navItem.active = true;
                } else {
                    navItem.active = false;
                }

                if (context.customerId) {
                    navItem.link = navItem.link.replace(/:customerId/gi, context.customerId);
                    navItem.hidden = false;
                }

                window.bootstrap.navigation.push(navItem);
            });

            context.trigger('navigation:changed');
        },

        listCustomers: function() {
            var customers = new Customers();
            customers.fetch().then(function(response) {
                $('#survey-container').html(new CustomerListView({collection: customers}).render().el);
            }).fail(function() {
                context.trigger('error');
            });
        },
        listSurveys: function(customerId) {
            var surveys = new SurveyCollection(null, {customerId: customerId});
            surveys.fetch().then(function(response) {
                $('#survey-container').html(new SurveyListView({collection: surveys}).render().el);
            }).fail(function() {
                context.trigger('error');
            });
        },
        buildSurvey: function(customerId) {
            $('#survey-container').html(new BuilderView({model: new SurveyModel({customerId: customerId})}).render().el);
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
                theme: 'relax',
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

        // cause choice trigger is saved as a string initially...
        Handlebars.registerHelper('isChoiceTrigger', function(trigger, options) {
            if((typeof trigger === 'string' && trigger === 'true') || (typeof trigger === 'boolean' && trigger)) {
                return options.fn(this);
            }
        });

        Backbone.history.start({pushState: true, hashChange: false});

        MainLayout.init();
    };
    return {
        initialize: initialize
    };
});