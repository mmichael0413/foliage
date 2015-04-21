/**
 * invalidate_cloudfront
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    var fileList = [
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.eot'
        },
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.svg'
        },
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.ttf'
        },
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.woff'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.eot'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.svg'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.ttf'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.woff'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_822f1db99fd30a1b15edf1a3e5d340d4.eot'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_822f1db99fd30a1b15edf1a3e5d340d4.svg'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_822f1db99fd30a1b15edf1a3e5d340d4.ttf'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_822f1db99fd30a1b15edf1a3e5d340d4.woff'
        }
    ];

    return {
        shared: {
            options: {
                key: process.env.AWS_ACCESS_KEY_ID, // Use the variables
                secret: process.env.AWS_SECRET_ACCESS_KEY, // You can also use env variables
                region: "us-east-1"
            },
            staging: {
                options: {
                    distribution: 'EQW05WM7P779I'
                },
                files: fileList
            },
            production: {
                options: {
                    distribution: 'E317G7EK3NBS4R'
                },
                files: fileList
            }
        }

    };
};