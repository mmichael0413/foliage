/**
 * handlebars:pennyPacker
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        pennyPacker: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "PennyPacker.templates",
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                "js/apps/pennyPacker/templates/hbs-compiled.js": [
                    "templates/handlebars/shared/**/*.hbs",
                    "templates/handlebars/pennyPacker/**/*.hbs",
                    "templates/handlebars/thirdchannel/filters/**/*.hbs",
                    "templates/handlebars/thirdchannel/pagination.hbs",
                    "templates/handlebars/thirdchannel/*.hbs"
                ]
            }
        }
    };
};