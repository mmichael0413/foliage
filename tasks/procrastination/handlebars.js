/**
 * handlebars:procrastination
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        procrastination: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "procrastination.templates",
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                "js/apps/procrastination/templates/hbs-compiled.js": [
                    "templates/handlebars/shared/**/*.hbs",
                    "templates/handlebars/procrastination/**/*.hbs"
                ]
            }
        }
    };
};