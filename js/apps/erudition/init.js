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
        'handlebarsTemplates': 'erudition/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'moment' : '../libs/moment',
        'helpers'       : 'thirdchannel/utils/helpers',
        'serializeObject' : "../libs/bower_components/jquery-serialize-object/jquery.serialize-object",
        'jquery-validate' : '../libs/bower_components/jquery-validation/dist/jquery.validate',
        'jquery.mask' : '../libs/bower_components/jquery-mask-plugin/dist/jquery.mask',
        'chosen': "../libs/bower_components/chosen/chosen.jquery",
        'typeahead'     : '../libs/bower_components/typeahead.js/dist/typeahead.jquery.min',
        'expanding': '../libs/expanding'

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
        },
        "jquery-validate": {
            deps: ["jquery"],
            exports: "jquery.validation"
        },
        'chosen': {
            deps: ["jquery"]
        },
        "typeahead": {
            deps:["jquery"],
            exports: "$.fn"
        }
    }
});


require([
    'erudition/app'
], function (app) {
    app.initialize();
});
