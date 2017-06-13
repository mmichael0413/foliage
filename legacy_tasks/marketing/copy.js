/**
 * copy:marketing
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        marketing: {
            files: [
                // Marketing dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/marketing/js', filter: 'isFile'},
                {expand: true, flatten: true, src: ['images/marketing/*'], dest: 'dist/marketing/images/', filter: 'isFile'}
            ]
        }
    };
};