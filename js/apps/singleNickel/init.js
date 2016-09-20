/*
 Development / non testing RequireJS config / main file
 */
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps/',

    paths: {
        'jquery': "../libs/bower_components/jquery/jquery",
        'jquery_ujs' : '../libs/bower_components/jquery-ujs/src/rails',
        'jquery-ui'     : "../libs/bower_components/jquery-ui/jquery-ui",
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'backbone.modal' : '../libs/bower_components/backbone-modal/backbone.modal',
        'handlebars': '../libs/bower_components/handlebars/handlebars',
        'handlebarsTemplates': 'singleNickel/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'context': 'shared/utils/context',
        'backboneValidator' : '../libs/bower_components/backbone-validator/backbone-validator',
        'backboneValidatorPatch': '../libs/backbone-validator/viewCallbackPatch',
        'chosen': "../libs/bower_components/chosen/chosen.jquery",
        'jquery-mousewheel': "../libs/bower_components/jquery-mousewheel/jquery.mousewheel",
        'php-date-formatter': "../libs/bower_components/php-date-formatter/js/php-date-formatter",
        'dateTimePicker': "../libs/bower_components/datetimepicker/jquery.datetimepicker",
        'noty': "../libs/bower_components/noty/js/noty/packaged/jquery.noty.packaged"
    },
    shim: {
        "jquery": {
            deps: [],
            exports: "$"
        },
        "jquery_ujs": {
            deps: ["jquery"]
        },
        "jquery-ui": {
            deps: ['jquery']
        },
        "underscore": {
            deps: ["jquery"],
            exports: "_"
        },
        "backbone": {
            deps: ["underscore"],
            exports: "Backbone"
        },
        "backbone.modal" : {
            deps: ["backbone"]
        },
        "backboneValidator": {
            deps: ["backbone"]
        },
        "backboneValidatorPatch": {
            deps: ["backboneValidator"]
        },
        "handlebars": {
            deps: ["jquery"],
            exports: "Handlebars"
        },
        "handlebarsTemplates": {
            deps: ["handlebars", "handlebarsHelpers"],
            exports: "HandlebarsTemplates"
        },
        'handlebarsHelpers': {
            deps: ["handlebars"]
        },
        'context': {
            deps: ["underscore"]
        },
        'chosen': {
            deps: ["jquery"]
        },
        'noty': {
            deps: ['jquery']
        },
        'jquery-mousewheel': {
            deps: ['jquery']
        },
        'php-date-formatter': {
            deps: ['jquery']
        },
        'dateTimePicker': {
            deps: ['jquery', 'php-date-formatter', 'jquery-mousewheel']
        }
    }
});

require([
    'singleNickel/app'
], function(app){
    app.initialize();
});
