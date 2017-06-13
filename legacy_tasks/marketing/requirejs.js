/**
 * requirejs:marketing
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        marketing: {
            options: {
                mainConfigFile: "js/apps/marketing/init.js",
                baseUrl: 'js/apps',
                name: 'marketing/init',
                out: 'dist/marketing/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};