require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps',
    waitSeconds: 0,
    paths: {
        'jquery': '../libs/bower_components/jquery/jquery.min',
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'handlebars': '../libs/bower_components/handlebars/handlebars.min',
        'expanding': '../libs/expanding',
        'handlebarsTemplates': 'stores/templates/hbs-compiled',
        'handlebarsHelpers': 'shared/utils/handlebarsHelpers',
        'noty': '../libs/bower_components/noty/js/noty/packaged/jquery.noty.packaged'
    },
    shim: {
        'jquery': {
            deps: [],
            exports: '$'
        },
        'jquery_ujs': {
            deps: ['jquery']
        },
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'handlebars': {
            deps: ['jquery'],
            exports: 'Handlebars'
        },
        'handlebarTemplates': {
            deps: ['handlebars', 'handlebarsHelpers'],
            exports: 'HandlebarTemplates'
        },
        'handlebarsHelpers': {
            deps: ['handlebars']
        },
        'context': {
            deps: ['underscore']
        },
        'noty': {
            deps: ['jquery']
        }
    }
});

require([
    'stores/app'
], function(app){
    app.initialize();
});