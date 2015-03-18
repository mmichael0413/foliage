/*global module, require */
/*jslint regexp: true */

/**
 * Grunt Configurations
 * ====================
 *
 * Seperate tasks and configurations are declared in '/tasks'.
 *
 * Link: https://github.com/firstandthird/load-grunt-config
 */

module.exports = function (grunt) {
    "use strict";

    // load task and configurations
    require('load-grunt-config')(grunt, {
        configPath: __dirname +  '/tasks',
        data: {
            pkg: grunt.file.readJSON('package.json'),
            year: new Date().getFullYear()
        }
    });
};