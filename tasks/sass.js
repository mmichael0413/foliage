/**
 * sass
 * ==========
 *
 */

"use strict";

/**
 * TODO: Figure out if there's a way to make this accessible to all tasks
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
 * Builds the Sass configuration for each app
 *
 * @param  {grunt} grunt The grunt object
 * @return {object} The Sass file configuration
 */
function buildSassConfig(grunt) {
    var files = {};
    operateOnPaths(grunt, 'css/scss/apps/*', function (name, path, tokens) {
        if (grunt.file.exists(path + '/main.scss')) {
            files['dist/' + name + '/css/main.css'] = path + '/main.scss';
        } else {
            console.warn("Ignoring '" + path + "'' because it contains no 'main.scss'");
        }
    });
    return files;
}

module.exports = function(grunt) {
    return {
        dist: {
            files: buildSassConfig(grunt)
        }
    };
};