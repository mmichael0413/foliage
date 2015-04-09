/**
 * copy:thirdchannel
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        thirdchannel: {
            files: [
                // thirdchannel dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/thirdchannel/js', filter: 'isFile'},
                {expand: true, flatten: true, src: ['images/thirdchannel/*'], dest: 'dist/thirdchannel/images/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['js/libs/bower_components/slick.js/slick/ajax-loader.gif'], dest: 'dist/thirdchannel/css/', filter: 'isFile'}
            ]
        }
    };
};