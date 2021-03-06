/**
 * invalidate_cloudfront:marketing
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    var fileList = [
        {
            dest: 'dist/marketing/css/main.css'
        },
        {
            dest: 'dist/marketing/css/main.css.map'
        },
        {
            dest: 'dist/marketing/js/app.js'
        },
        {
            dest: 'dist/marketing/js/app.js.map'
        },
        {
            dest: 'dist/marketing/js/require.js'
        },
        {
            dest: 'dist/marketing/images/agents.jpg'
        },
        {
            dest: 'dist/marketing/images/agents_home.jpg'
        },
        {
            dest: 'dist/marketing/images/capture.jpg'
        },
        {
            dest: 'dist/marketing/images/contact.jpg'
        },
        {
            dest: 'dist/marketing/images/facebook.png'
        },
        {
            dest: 'dist/marketing/images/howdo.jpg'
        },
        {
            dest: 'dist/marketing/images/linkedin.png'
        },
        {
            dest: 'dist/marketing/images/maximize.png'
        },
        {
            dest: 'dist/marketing/images/maximize.jpg'
        },
        {
            dest: 'dist/marketing/images/whatsthejob.jpg'
        },
        {
            dest: 'dist/marketing/images/facebook.svg'
        },
        {
            dest: 'dist/marketing/images/instagram.svg'
        },
        {
            dest: 'dist/marketing/images/linkedin.svg'
        },
        {
            dest: 'dist/marketing/images/twitter.svg'
        },
    ];

    return {
        marketing: {
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