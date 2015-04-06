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
    return {
        'dist/singleNickel/css/main.css' : 'css/scss/apps/singleNickel/main.scss'
    };
}

module.exports = function(grunt) {
    return {
        dist: {
            files: buildSassConfig(grunt)
        }
    };
};