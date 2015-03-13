/*
 Development / non testing RequireJS config / main file
 */
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps/',

    paths: {
        'jquery': "../libs/bower_components/jquery/jquery",
        'jquery_ujs' : '../libs/bower_components/jquery-ujs/src/rails',
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'handlebars': '../libs/bower_components/handlebars/handlebars',
        'handlebarsTemplates': 'singleNickel/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'context': 'shared/utils/context',
        'backboneValidator' : '../libs/bower_components/backbone-validator/backbone-validator'
    },
    shim: {
        "jquery": {
            deps: [],
            exports: "$"
        },
        "jquery_ujs": {
            deps: ["jquery"]
        },
        "underscore": {
            deps: ["jquery"],
            exports: "_"
        },
        "backbone": {
            deps: ["underscore"],
            exports: "Backbone"
        },
        "backboneValidator": {
            deps: ["backbone"]
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
        }
    }
});

require([
    'singleNickel/app'
], function(app){
    app.initialize();
});