/**
 * karma
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {

    var files = [  {pattern: "js/libs/bower_components/jquery-serialize-object/jquery.serialize-object.js", included: false}];


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
            options: grunt.util.buildKarmaOptions('thirdchannel', files)
        }
    };
};