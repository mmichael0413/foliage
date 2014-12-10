/*
    Development / non testing RequireJS config / main file
*/
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps',

    paths: {
        'jquery': "../libs/bower_components/jquery/jquery.min",
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'handlebars': '../libs/bower_components/handlebars/handlebars.min',
        'expanding': '../libs/expanding',
        'donut_chart': '../libs/charts/donut_chart',
        'handlebarsTemplates': 'thirdchannel/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'context': 'shared/utils/context',
        'imagesloaded' : "../libs/bower_components/imagesloaded/imagesloaded.pkgd",
        'backbone.modal' : '../libs/bower_components/backbone-modal/backbone.modal',
        'jquery_ujs' : '../libs/bower_components/jquery-ujs/src/rails',
        'chartjs' : '../libs/Chart',
        'slick_carousel': '../libs/bower_components/slick.js/slick/slick',
        'livestamp' : '../libs/livestamp.min',
        'moment' : '../libs/moment',
        'chosen': "../libs/bower_components/chosen/chosen.jquery",
        'jquery-validate' : '../libs/bower_components/jquery-validation/dist/jquery.validate',
        'serializeObject' : "../libs/bower_components/jquery-serialize-object/jquery.serialize-object",
        'quill' : '../libs/quill/custom',
        'quill-youtube' : '../libs/quill/modules/youtube',
        'helpers' : 'thirdchannel/utils/helpers',
        'pikaday' : '../libs/bower_components/pikaday/pikaday'
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
        'imagesloaded': {
            deps: ["jquery"]
        },
        "backbone.modal" : {
            deps: ["backbone"]
        },
        'slick_carousel': {
            deps: ["jquery"]
        },
        "livestamp": {
            deps: ["moment"],
            exports: 'Livestamp'
        },
        "jquery-validate": {
            deps: ["jquery"],
            exports: "jquery.validation"
        },
        'serializeObject': {
            deps: ["jquery"]
        },
        'quill': {
            deps: ["jquery"]
        },
        "quill-youtube": {
            deps: ['quill']
        },
        'chosen': {
            deps: ["jquery"]
        }
    }
});

require([
    'thirdchannel/app'
], function(app){
    app.initialize();
});