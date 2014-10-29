/*
    Development / non testing RequireJS config / main file
*/
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/',

    paths: {
        'jquery': "libs/bower_components/jquery/jquery.min",
        'underscore': 'libs/bower_components/underscore/underscore',
        'backbone': 'libs/bower_components/backbone/backbone',
        'handlebars': 'libs/bower_components/handlebars/handlebars.min',
        'handlebarsTemplates': 'app/templates/hbs-compiled',
        'handlebarsHelpers' : 'app/utils/handlebarsHelpers',
        'context': 'app/utils/context',
        'imagesloaded' : "libs/bower_components/imagesloaded/imagesloaded.pkgd",
        'backbone.modal' : 'libs/bower_components/backbone-modal/backbone.modal',
        'jquery_ujs' : 'libs/bower_components/jquery-ujs/src/rails',
        'chartjs' : 'libs/Chart',
        'slick_carousel': 'libs/bower_components/slick.js/slick/slick',
        'livestamp' : 'libs/livestamp.min',
        'moment' : 'libs/moment',
        'chosen': "libs/bower_components/chosen/chosen.jquery",
        'jquery-validate' : 'libs/bower_components/jquery-validation/dist/jquery.validate',
        'serializeObject' : "libs/bower_components/jquery-serialize-object/jquery.serialize-object",
        'quill' : 'libs/quill/custom',
        'quill-video' : 'libs/quill/modules/iframe'
    },
    shim: {
        "jquery": {
            deps: [],
            exports: "$"
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
        "backbone.modal" : {
            deps: ["backbone"]
        },
        "livestamp": {
            deps: ["moment"],
            exports: 'Livestamp'
        },
        "jquery-validate": {
            deps: ["jquery"],
            exports: "jquery.validation"
        },
        "quill-video": {
            deps: ['quill']
        }
    }
});

require([
    'app/app'
], function(app){
    app.initialize();
});