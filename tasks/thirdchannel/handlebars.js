/**
 * handlebars:thirdchannel
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        thirdchannel: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: "ThirdChannel.templates",
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                "js/apps/thirdchannel/templates/hbs-compiled.js": [
                    "templates/handlebars/shared/**/*.hbs",
                    "templates/handlebars/thirdchannel/**/*.hbs",
                    "templates/handlebars/erudition/**/*.hbs"
                ]
            }
        }
    };
};