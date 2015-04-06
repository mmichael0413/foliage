/**
 * requirejs
 * ==========
 *
 */

"use strict";

/**
 *
 * Builds the requirejs task blocks. Generally one for each app / service
 *
 */
function buildRequireJSConfig(grunt) {
    return {
        singleNickel: {
            options: {
                mainConfigFile: "js/apps/singleNickel/init.js",
                baseUrl: 'js/apps',
                name: 'singleNickel/init',
                out: 'dist/singleNickel/js/app.js',
                removeCombined: true,
                findNestedDependencies: true,
                generateSourceMaps: true,
                optimize: "uglify2",
                preserveLicenseComments: false
            }
        }
    };
}

module.exports = function(grunt) {
    return buildRequireJSConfig(grunt);
};