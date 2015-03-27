/**
 * sass
 * ==========
 *
 */

"use strict";

/**
 * Builds the Sass configuration for each app
 *
 * @param  {grunt} grunt The grunt object
 * @return {object} The Sass file configuration
 */
function buildSassConfig(grunt) {
    var files = {};
    grunt.util.operateOnPaths(grunt, 'css/scss/apps/*', function (name, path, tokens) {
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