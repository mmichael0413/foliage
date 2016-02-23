/*
    Development / non testing RequireJS config / main file
*/
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps',
    waitSeconds: 0,
    paths: {
        'jquery': "../libs/bower_components/jquery/jquery.min",
        'jquery-ui'     : "../libs/bower_components/jquery-ui/jquery-ui",
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'handlebars': '../libs/bower_components/handlebars/handlebars.min',
        'expanding': '../libs/expanding',
        'handlebarsTemplates': 'thirdchannel/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'context': 'shared/utils/context',
        'imagesloaded' : "../libs/bower_components/imagesloaded/imagesloaded.pkgd",
        'backbone.modal' : '../libs/bower_components/backbone-modal/backbone.modal',
        'jquery_ujs' : '../libs/bower_components/jquery-ujs/src/rails',
        'chartjs' : '../libs/Chart',
        'chartjs_stacked_bar': '../libs/bower_components/Chart.StackedBar.js/src/Chart.StackedBar',
        'slick_carousel': '../libs/bower_components/slick.js/slick/slick',
        'livestamp' : '../libs/livestamp.min',
        'moment' : '../libs/moment',
        'chosen': "../libs/bower_components/chosen/chosen.jquery",
        'jquery-validate' : '../libs/bower_components/jquery-validation/dist/jquery.validate',
        'serializeObject' : "../libs/bower_components/jquery-serialize-object/jquery.serialize-object",
        'quill' : '../libs/quill/custom',
        'quill-youtube' : '../libs/quill/modules/youtube',
        'helpers' : 'thirdchannel/utils/helpers',
        'pikaday' : '../libs/bower_components/pikaday/pikaday',
        'chartist' : '../libs/bower_components/chartist/dist/chartist',
        'd3': '../libs/bower_components/d3/d3',
        'c3': '../libs/bower_components/c3/c3',
        'dateTimePicker': "../libs/bower_components/datetimepicker/jquery.datetimepicker",
        'jquery.mask' : '../libs/bower_components/jquery-mask-plugin/dist/jquery.mask',
        'typeahead'     : '../libs/bower_components/typeahead.js/dist/typeahead.jquery.min',
        'rxjs'          : '../libs/bower_components/rxjs/dist/rx.all.min',
        'viewer'      : '../libs/viewer',
        'jquery-deparam' : '../libs/bower_components/jquery-deparam/jquery-deparam',
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
        },
        'chartjs_stacked_bar': {
            deps: ['chartjs']
        },
        'dateTimePicker': {
            deps: ["jquery"]
        },
        'c3': {
            deps: ["d3"]
        },
        "typeahead": {
            deps:["jquery"],
            exports: "$.fn"
        },
        "rxjs": {
            deps: ["jquery"]
        },
        "jquery-deparam": {
            deps: ["jquery"]
        }
    }
});

require([
    'thirdchannel/app'
], function(app){
    app.initialize();
});
