/**
 * copy:bigTastysBackDoor
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        bigTastysBackDoor: {
            files: [
                // bigTastysBackDoor dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/bigTastysBackDoor/js', filter: 'isFile'}
            ]
        }
    };
};