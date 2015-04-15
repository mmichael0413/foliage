/**
 * handlebars:singleNickel
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        singleNickel: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "SingleNickel.templates",
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                "js/apps/singleNickel/templates/hbs-compiled.js": [
                    "templates/handlebars/shared/**/*.hbs",
                    "templates/handlebars/singleNickel/**/*.hbs"
                ]
            }
        }
    };
};