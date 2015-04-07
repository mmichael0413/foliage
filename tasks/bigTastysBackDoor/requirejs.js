/**
 * requirejs:bigTastysBackDoor
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        bigTastysBackDoor: {
            options: {
                mainConfigFile: "js/apps/bigTastysBackDoor/init.js",
                baseUrl: 'js/apps',
                name: 'bigTastysBackDoor/init',
                out: 'dist/bigTastysBackDoor/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};