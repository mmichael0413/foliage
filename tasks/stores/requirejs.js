/**
 * requirejs
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        stores: {
            options: {
                mainConfigFile: 'js/apps/stores/init.js',
                baseUrl: 'js/apps',
                name: 'stores/init',
                out: 'dist/stores/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: 'uglify2',
                preserveLicenseComments: false
            }
        }
    };
};