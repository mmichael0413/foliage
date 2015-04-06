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
    var config = {};
    grunt.util.operateOnPaths(grunt, 'js/apps/*', function (name, path, tokens) {
        // checking if the path exists, so that we can have additional 'apps' containing shared modules
        // which we don't necessarily want to build
        if (grunt.file.exists(path + '/init.js')) {
            config[name] = {
                options: {
                    mainConfigFile: path +"/init.js",
                    baseUrl: 'js/apps',
                    name: name + '/init',
                    out: 'dist/' + name + '/js/app.js',
                    removeCombined: true,
                    findNestedDependencies: true,
                    generateSourceMaps: true,
                    optimize: "uglify2",
                    preserveLicenseComments: false
                }
            };
        }

    });

    return config;
}

module.exports = function(grunt) {
    return buildRequireJSConfig(grunt);
};