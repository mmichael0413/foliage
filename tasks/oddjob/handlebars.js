/**
 * handlebars:oddjob
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        oddjob: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "oddjob.templates",
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                "js/apps/oddjob/templates/hbs-compiled.js": [
                    "templates/handlebars/shared/**/*.hbs",
                    "templates/handlebars/oddjob/**/*.hbs",
                    "templates/handlebars/thirdchannel/filters/**/*.hbs",
                    "templates/handlebars/thirdchannel/pagination.hbs",
                    "templates/handlebars/thirdchannel/*.hbs"
                ]
            }
        }
    };
};