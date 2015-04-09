/**
 * karma
 * ==========
 *
 */

"use strict";

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

        shared: {
            options: grunt.util.buildKarmaOptions('shared')
        }
    };
};