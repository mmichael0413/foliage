/**
 * copy:pennyPacker
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        pennyPacker: {
            files: [
                // pennyPacker dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/pennyPacker/js', filter: 'isFile'}
            ]
        }
    };
};