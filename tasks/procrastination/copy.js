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
                {
                    expand: true,
                    flatten: true,
                    src: ['js/libs/bower_components/requirejs/require.js'],
                    dest: 'dist/procrastination/js',
                    filter: 'isFile',
                },

                // jquery-ui js and images
                {
                    src: 'js/libs/bower_components/jquery-ui/jquery-ui.min.js',
                    dest: 'dist/procrastination/',
                },
                {
                    src: 'js/libs/bower_components/jquery-ui/themes/base/**/*',
                    dest: 'dist/procrastination/',
                },
            ]
        }
    };
};

