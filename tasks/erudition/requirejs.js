/**
 * requirejs:erudition
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        erudition: {
            options: {
                mainConfigFile: "js/apps/erudition/init.js",
                baseUrl: 'js/apps',
                name: 'erudition/init',
                out: 'dist/erudition/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};