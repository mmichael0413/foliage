/**
 * jshint
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        // the all task covers all files, excluding the hbs-compiled (auto-generated) and any libs we use (we didn't write them)
        shared: ['Gruntfile.js', 'js/apps/shared/**/*.js'],
        options: {
            ignores: [
                '**/hbs-compiled.js',
                'js/compiled-app.js',
                'js/libs/**/*.js'
            ]
        }
    };
};