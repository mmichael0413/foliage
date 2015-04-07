/**
 * requirejs:thirdchannel
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        thirdchannel: {
            options: {
                mainConfigFile: "js/apps/thirdchannel/init.js",
                baseUrl: 'js/apps',
                name: 'thirdchannel/init',
                out: 'dist/thirdchannel/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
};