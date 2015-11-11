/**
 * handlebars:erudition
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        erudition: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "erudition.templates",
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                "js/apps/erudition/templates/hbs-compiled.js": [
                    "templates/handlebars/shared/**/*.hbs",
                    "templates/handlebars/erudition/**/*.hbs",
                    "templates/handlebars/thirdchannel/filters/**/*.hbs",
                    "templates/handlebars/thirdchannel/pagination.hbs",
                    "templates/handlebars/thirdchannel/filter_active_item.hbs"
                ]
            }
        }
    };
};