/**
 * copy
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        shared: {
            files: [
                // Shared dist files.
                {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/shared/fonts/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['images/shared/*'], dest: 'dist/shared/images/', filter: 'isFile'}
            ]
        }
    };
};