/**
 * copy
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        main: {
            files: [
                // ThirdChannel dist files.
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/thirdchannel/js', filter: 'isFile'},
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/marketing/js', filter: 'isFile'},
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/bigTastysBackDoor/js', filter: 'isFile'},
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/doubleNickel/js', filter: 'isFile'},
                {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/pennyPacker/js', filter: 'isFile'},
                {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/thirdchannel/fonts/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/marketing/fonts/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/territory/fonts/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/bigTastysBackDoor/fonts/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/doubleNickel/fonts/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/pennyPacker/fonts/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['images/thirdchannel/*'], dest: 'dist/thirdchannel/images/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['js/libs/bower_components/slick.js/slick/ajax-loader.gif'], dest: 'dist/thirdchannel/css/', filter: 'isFile'},
                {expand: true, flatten: true, src: ['images/marketing/*'], dest: 'dist/marketing/images/', filter: 'isFile'}
            ]
        }
    };
};