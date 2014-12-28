/*
 Development / non testing RequireJS config / main file
 */
require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps/',

    paths: {
        'jquery': "../libs/bower_components/jquery/jquery.min",
        'jquery_ujs' : '../libs/bower_components/jquery-ujs/src/rails',
        'serializeObject' : "../libs/bower_components/jquery-serialize-object/jquery.serialize-object",
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'handlebars': '../libs/bower_components/handlebars/handlebars.min',
        'handlebarsTemplates': 'thirdchannel/templates/hbs-compiled',
        'handlebarsHelpers' : 'shared/utils/handlebarsHelpers',
        'helpers' : 'thirdchannel/utils/helpers',
        'pikaday' : '../libs/bower_components/pikaday/pikaday',
        'context': 'shared/utils/context',
        

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
        }
    }
});

require([
    'pennyPacker/app'
], function(app){
    app.initialize();
});