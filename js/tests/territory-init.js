var tests = [];
// only execute any Test scripts that end with Spec.js
if (window.__karma__) {
    for (var file in window.__karma__.files) {
        if (/spec\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

require.config({

    baseUrl: '/base/js/apps/',

    paths: {
        'jquery': '../libs/bower_components/jquery/jquery.min',
        'underscore': '../libs/bower_components/underscore/underscore',
        'backbone': '../libs/bower_components/backbone/backbone',
        'handlebars': '../libs/bower_components/handlebars/handlebars.min',

    },
    shim: {

        'jquery': {
            exports: '$'
        },

        'underscore': {
            exports: '_'
        },


        'backbone': {
            deps: ['jquery', 'underscore', 'handlebars'],
            exports: 'Backbone'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});