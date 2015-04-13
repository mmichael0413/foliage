/**
 * copy:procrastination
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        procrastination: {
            files: [
                // procrastination dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/procrastination/js', filter: 'isFile'}
            ]
        }
    };
};