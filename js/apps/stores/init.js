require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps',
    waitSeconds: 0,
    paths: {
        'jquery': '../libs/bower_components/jquery/jquery.min',
        'jquery_ujs' : '../libs/bower_components/jquery-ujs/src/rails',
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'handlebars': '../libs/bower_components/handlebars/handlebars.min',
        'backbone.modal' : '../libs/bower_components/backbone-modal/backbone.modal',
        'expanding': '../libs/expanding',
        'handlebarsTemplates': 'stores/templates/hbs-compiled',
        'handlebarsHelpers': 'shared/utils/handlebarsHelpers',
        'context': 'shared/utils/context',
        'serializeObject' : '../libs/bower_components/jquery-serialize-object/jquery.serialize-object',
        'backboneValidator' : '../libs/bower_components/backbone-validator/backbone-validator',
        'helpers' : 'thirdchannel/utils/helpers',
        'pikaday' : '../libs/bower_components/pikaday/pikaday',
        'noty': '../libs/bower_components/noty/js/noty/packaged/jquery.noty.packaged',
        'dateTimePicker': "../libs/bower_components/datetimepicker/jquery.datetimepicker",
        'async': '../libs/bower_components/requirejs-plugins/src/async'
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
        "backboneValidator": {
            deps: ["backbone"]
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
        'backbone.modal' : {
            deps: ['backbone']
        },
        'context': {
            deps: ['underscore']
        },
        'serializeObject': {
            deps: ["jquery"]
        },
        'dateTimePicker': {
            deps: ["jquery"]
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
