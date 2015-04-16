/*
 Development / non testing RequireJS config / main file
 */
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps/',

    paths: {
        'jquery'        : "../libs/bower_components/jquery/jquery.min",
        'jquery-ui'     : "../libs/bower_components/jquery-ui/jquery-ui",
        'jquery_ujs'    : '../libs/bower_components/jquery-ujs/src/rails',
        'jquery-validate' : '../libs/bower_components/jquery-validation/dist/jquery.validate',
        'serializeObject' : "../libs/bower_components/jquery-serialize-object/jquery.serialize-object",
        'underscore'    : '../libs/bower_components/underscore/underscore',
        'backbone'      : '../libs/bower_components/backbone/backbone',
        'handlebars'    : '../libs/bower_components/handlebars/handlebars.min',
        'handlebarsTemplates': 'procrastination/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'helpers'       : 'thirdchannel/utils/helpers',
        'pikaday'       : '../libs/bower_components/pikaday/pikaday',
        'context'       : 'shared/utils/context',
        'fullcalendar'  : '../libs/bower_components/fullcalendar/dist/fullcalendar',
        'moment'        : '../libs/bower_components/moment/moment'
        

    },
    shim: {
        "jquery": {
            deps: [],
            exports: "$"
        },
        "jquery-ui": {
            deps: ['jquery']
        },
        "jquery_ujs": {
            deps: ["jquery"]
        },
        "jquery-validate": {
            deps: ["jquery"],
            exports: "jquery.validation"
        },
        "underscore": {
            deps: ["jquery"],
            exports: "_"
        },
        "backbone": {
            deps: ["underscore"],
            exports: "Backbone"
        },
        "handlebars": {
            deps: ["jquery"],
            exports: "Handlebars"
        },
        "handlebarTemplates": {
            deps: ["handlebars", "handlebarsHelpers"],
            exports: "HandlebarTemplates"
        },
        'handlebarsHelpers': {
            deps: ["handlebars"]
        },
        'context': {
            deps: ["underscore"]
        },
        'fullcalendar' : {
            deps: ["moment", "jquery"]
        }
    }
});

require([
    'procrastination/app'
], function(app){
    app.initialize();
});