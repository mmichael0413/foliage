/**
 * concurrent
 * ==========
 *
 */

'use strict';

module.exports = function(grunt) {
    return {
        dev: ['nodemon', 'watch'],
        options: {
            logConcurrentOutput: true
        }
    };
};