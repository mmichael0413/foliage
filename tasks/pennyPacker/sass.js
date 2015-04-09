/**
 * sass:pennyPacker
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        pennyPacker: {
            files: {'dist/pennyPacker/css/main.css' : 'css/scss/apps/pennyPacker/main.scss'}
        }
    };
};