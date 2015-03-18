/**
 * requirejs
 * ==========
 *
 */

"use strict";

/**
 *
 * Wrapper to perform an operation on each matching path item. Could be a file or a directory.
 * Each item will be passed to a callback - fn - which will receive the following arguments:
 * - the name of the item (e.g. the last position in the file path)
 * - the full path
 * - the tokenized breakup of the path
 *
 */
function operateOnPaths(grunt, path, fn) {
    var appPaths = grunt.file.expand(path),
        tokens,
        name,
        i = appPaths.length;

    while(i--) {
        tokens = appPaths[i].split('/');
        // callback that fn utilizes
        // name, path, tokens
        fn(tokens[tokens.length-1], appPaths[i], tokens);
    }
}

/**
 *
 * Builds the requirejs task blocks. Generally one for each app / service
 *
 */
function buildRequireJSConfig(grunt) {
    var config = {};
    operateOnPaths(grunt, 'js/apps/*', function (name, path, tokens) {
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