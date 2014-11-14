require.config({
    baseUrl: 'http://www.thirdchannel.dev:3031/js/apps/',

    paths: {
        'jquery': "../libs/bower_components/jquery/jquery.min"
    },
    shim: {
        "jquery": {
            deps: [],
            exports: "$"
        },
        "jquery_ujs": {
            deps: ["jquery"]
        }
    }
});

require([
    'marketing/app'
], function(app){
    app.initialize();
});