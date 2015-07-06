/**
 * requirejs:oddjob
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        oddjob: {
            options: {
                mainConfigFile: "js/apps/oddjob/init.js",
                baseUrl: 'js/apps',
                name: 'oddjob/init',
                out: 'dist/oddjob/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};