/**
 * watch
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        sass: {
            files: ['css/**/*.scss'],
            tasks: ['sass', 'copy'],
            options: {
                port: 3001,
                livereload: true
            }
        },
        hbs: {
            files: ['templates/handlebars/**/*.hbs'],
            tasks: ['handlebars', 'copy'],
            options: {
                spawn: false
            }
        },
        jshint: {
            // watch for changes in either the app or test, but run the js task, which covers all relevant files
            files: ['js/**/*.js', 'js/test/**/*.js'],
            tasks: ['jshint'],
            options: {
                spawn: false
            }
        },
        thirdchannel_test: {
            files: ['js/apps/thirdchannel/**/*.js', 'js/tests/thirdchannel/**/*.js'],
            tasks: ['karma:thirdchannel']
        },
        territory_test: {
            files: ['js/apps/territory/**/*.js', 'js/tests/territory/**/*.js'],
            tasks: ['karma:territory']
        }
    };
};