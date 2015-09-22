require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps/',

    paths: {
        'jquery'        : "../libs/bower_components/jquery/jquery.min",
        'jquery-ui'     : "../libs/bower_components/jquery-ui/jquery-ui",
        'jquery_ujs'    : '../libs/bower_components/jquery-ujs/src/rails',
        'backbone': '../libs/bower_components/backbone/backbone',
        'underscore': '../libs/bower_components/underscore/underscore',
        'context': 'shared/utils/context',
        'handlebars'    : '../libs/bower_components/handlebars/handlebars.min',
        'handlebarsTemplates': 'procrastination/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'helpers'       : 'thirdchannel/utils/helpers'
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
        'underscore': {
            deps: ['jquery'],
            exports: '_'
        },
        'backbone': {
            deps: ['underscore'],
            exports: 'Backbone'
        },
        'context': {
            deps: ["underscore"]
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
        }
    }
});


require([
    'erudition/app'
], function (app) {
    app.initialize();
});