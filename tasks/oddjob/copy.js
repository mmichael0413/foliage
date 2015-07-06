/**
 * copy:oddjob
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        oddjob: {
            files: [
                // oddjob dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/oddjob/js', filter: 'isFile'}
            ]
        }
    };
};