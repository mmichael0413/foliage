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
        'imagesLoaded' : "libs/bower_components/imagesLoaded/imagesLoaded",
        'eventEmitter' : "libs/bower_components/eventEmitter/EventListener",
        'eventie' : "libs/bower_components/eventie/eventie",
        'backbone.modal' : 'libs/backbone.modal'
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
        "imagesLoaded" : {
            deps: ["eventEmitter", "eventie"],
            exports: "ImagesLoaded"
        },
        "backbone.paginator" : {
            deps: ["backbone"]
        },
        "backbone.modal" : {
            deps: ["backbone"],
            exports: "BackboneModal"
        }
    }
});

require([
    'app/app'
], function(app){
    app.initialize();
});