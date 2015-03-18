/*global module, require */
/*jslint regexp: true */

/**
 * Grunt Configurations
 * ====================
 *
 * Seperate tasks and configurations are declared in '/tasks'.
 *
 * Link: https://github.com/firstandthird/load-grunt-config
 */

module.exports = function (grunt) {
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
    grunt.util.operateOnPaths = function(grunt, path, fn) {
        var appPaths = grunt.file.expand(path),
            tokens,
            name,
            i = appPaths.length;

        while (i--) {
            tokens = appPaths[i].split('/');
            // callback that fn utilizes
            // name, path, tokens
            fn(tokens[tokens.length - 1], appPaths[i], tokens);
        }
    }

    // load task and configurations
    require('load-grunt-config')(grunt, {
        configPath: __dirname +  '/tasks',
        data: {
            pkg: grunt.file.readJSON('package.json'),
            year: new Date().getFullYear()
        }
    });
};