/*
 Development / non testing RequireJS config / main file
 */
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps/',

    paths: {
        'jquery'        : "../libs/bower_components/jquery/jquery.min",
        'jquery_ujs'    : '../libs/bower_components/jquery-ujs/src/rails',
        'jquery-validate' : '../libs/bower_components/jquery-validation/dist/jquery.validate',
        'typeahead'     : '../libs/bower_components/typeahead.js/dist/typeahead.jquery.min',
        'serializeObject' : "../libs/bower_components/jquery-serialize-object/jquery.serialize-object",
        'underscore'    : '../libs/bower_components/underscore/underscore',
        'backbone'      : '../libs/bower_components/backbone/backbone',
        'backbone.modal' : '../libs/bower_components/backbone-modal/backbone.modal',
        'handlebars'    : '../libs/bower_components/handlebars/handlebars.min',
        'handlebarsTemplates': 'pennyPacker/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'helpers'       : 'thirdchannel/utils/helpers',
        'pikaday'       : '../libs/bower_components/pikaday/pikaday',
        'context'       : 'shared/utils/context',
        'noty'          : '../libs/bower_components/noty/js/noty/packaged/jquery.noty.packaged',
        'qs' : '../libs/bower_components/ljharb-qs/dist/qs'
    },
    shim: {
        "jquery": {
            deps: [],
            exports: "$"
        },
        "jquery_ujs": {
            deps: ["jquery"]
        },
        "jquery-validate": {
            deps: ["jquery"],
            exports: "jquery.validation"
        },
        "typeahead": {
            deps:["jquery"],
            exports: "$.fn"
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
        'noty': {
            deps: ['jquery']
        }
    }
});

require([
    'pennyPacker/app'
], function(app){
    app.initialize();
});
