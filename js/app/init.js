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
        'eventListener': "app/utils/eventListener",
        'backbone.paginator': "libs/bower_components/backbone.paginator/lib/backbone.paginator",
        'imagesloaded' : "libs/bower_components/imagesloaded/imagesloaded.pkgd",
        'backbone.modal' : 'libs/backbone.modal',
        'jquery_ujs' : 'libs/bower_components/jquery-ujs/src/rails',
        'chartjs' : 'libs/Chart',
        'owl_carousel': 'libs/owl.carousel',
        'slick_carousel': 'libs/bower_components/slick.js/slick/slick'
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
        "eventListener": {
            deps: ["backbone"],
            exports: "EventListener"
        },
        "backbone.paginator" : {
            deps: ["backbone"]
        },
        "backbone.modal" : {
            deps: ["backbone"],
            exports: "BackboneModal"
        },
        "owl_carousel" : {
            exports: 'OwlCarousel'
        }
    }
});

require([
    'app/app'
], function(app){
    app.initialize();
});