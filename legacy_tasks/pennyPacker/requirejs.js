/**
 * requirejs:pennyPacker
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        pennyPacker: {
            options: {
                mainConfigFile: "js/apps/pennyPacker/init.js",
                baseUrl: 'js/apps',
                name: 'pennyPacker/init',
                out: 'dist/pennyPacker/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};