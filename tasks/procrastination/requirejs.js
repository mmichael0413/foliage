/**
 * requirejs:procrastination
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        procrastination: {
            options: {
                mainConfigFile: "js/apps/procrastination/init.js",
                baseUrl: 'js/apps',
                name: 'procrastination/init',
                out: 'dist/procrastination/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};