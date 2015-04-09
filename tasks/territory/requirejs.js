/**
 * requirejs:territory
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        territory: {
            options: {
                mainConfigFile: "js/apps/territory/init.js",
                baseUrl: 'js/apps',
                name: 'territory/init',
                out: 'dist/territory/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};