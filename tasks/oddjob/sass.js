/**
 * sass:oddjob
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        oddjob: {
            files: {'dist/oddjob/css/main.css' : 'css/scss/apps/oddjob/main.scss'}
        }
    };
};