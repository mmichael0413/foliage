/**
 * handlebars:bigTastysBackDoor
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        bigTastysBackDoor: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "BigTastysBackDoor.templates",
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                "js/apps/bigTastysBackDoor/templates/hbs-compiled.js": [
                    "templates/handlebars/shared/**/*.hbs",
                    "templates/handlebars/bigTastysBackDoor/**/*.hbs",
                    "templates/handlebars/thirdchannel/filters/**/*.hbs",
                    "templates/handlebars/thirdchannel/pagination.hbs",
                    "templates/handlebars/thirdchannel/*.hbs"
                ]
            }
        }
    };
};