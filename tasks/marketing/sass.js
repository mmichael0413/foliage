/**
 * sass:marketing
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        marketing: {
            files: {'dist/marketing/css/main.css' : 'css/scss/apps/marketing/main.scss'}
        }
    };
};