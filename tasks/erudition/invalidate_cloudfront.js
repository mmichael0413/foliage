/**
 * invalidate_cloudfront:erudition
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    var fileList = [
        {
            dest: 'dist/erudition/css/main.css'
        },
        {
            dest: 'dist/erudition/css/main.css.map'
        },
        {
            dest: 'dist/erudition/js/app.js'
        },
        {
            dest: 'dist/erudition/js/app.js.map'
        },
        {
            dest: 'dist/erudition/js/require.js'
        }
    ];

    return {
        erudition: {
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