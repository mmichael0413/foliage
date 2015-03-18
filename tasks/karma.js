/**
 * karma
 * ==========
 *
 */

"use strict";

function buildKarmaOptions(serviceName, additionalPaths, additionalExcludes) {
    var options = {frameworks: ['jasmine', 'requirejs']},
    // the included: false is mandatory in order to be loaded with requirejs; ignoring this causes the scripts to be loaded in
    // phantom, which causes requirejs to fail as the scripts have all ready been processed.
    // some libraries, Like jquery and backbone, are already AMD and should be included via false

        files = [
            "js/libs/bower_components/underscore/underscore.js",
            "js/libs/bower_components/handlebars/handlebars.min.js",
            {pattern: "js/libs/bower_components/jquery/jquery.min.js", included: false},
            {pattern: "js/libs/bower_components/backbone/backbone.js", included: false},
            {pattern: "js/apps/shared/**/*.js", included: false},
            {pattern: "js/tests/shared/**/*.js", included: false}
        ],
        excludes = ['js/app/**/init.js'];

    if(additionalPaths) {
        files = files.concat(additionalPaths);
    }
    if(additionalExcludes) {
        excludes =  excludes.concat(additionalExcludes);
    }

    files = files.concat([
        {pattern: "js/apps/" + serviceName + "/**/*.js", included: false},
        {pattern: "js/tests/" + serviceName +"/**/*.js", included: false},
        "js/tests/" + serviceName +"-init.js"
    ]);

    options.files = files;
    options.exclude = excludes;

    return options;
}

module.exports = function(grunt) {
    return {
        options: {
            // Ideally we want to run in background mode... but I'm running into a open file limit due to the grunt
            // watch task. Need to research how to raise the upper limit on the max file descriptors before proceeding
            //background: true,
            singleRun: true,
            browsers: ['PhantomJS'],
            basePath: "",
            reporters: ['dots']
        },

        thirdchannel: {
            options: buildKarmaOptions('thirdchannel')
        },

        territory: {
            options: buildKarmaOptions('territory')
        }
    };
};