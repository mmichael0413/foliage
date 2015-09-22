/**
 * copy:erudition
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        erudition: {
            files: [
                // erudition dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/erudition/js', filter: 'isFile'}
            ]
        }
    };
};