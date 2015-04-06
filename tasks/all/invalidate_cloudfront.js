/**
 * invalidate_cloudfront
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        options: {
            key: process.env.AWS_ACCESS_KEY_ID, // Use the variables
            secret: process.env.AWS_SECRET_ACCESS_KEY, // You can also use env variables
            region: "us-east-1"
        },
        staging: {
            options: {
                distribution: 'EQW05WM7P779I'
            },
            files: [
                {
                    dest: 'dist/thirdchannel/css/main.css'
                },
                {
                    dest: 'dist/thirdchannel/js/app.js'
                },
                {
                    dest: 'dist/thirdchannel/js/app.js.map'
                },
                {
                    dest: 'dist/thirdchannel/js/require.js'
                },
                {
                    dest: 'dist/singleNickel/css/main.css'
                },
                {
                    dest: 'dist/singleNickel/js/app.js'
                },
                {
                    dest: 'dist/singleNickel/js/app.js.map'
                },
                {
                    dest: 'dist/marketing/css/main.css'
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
                    dest: 'dist/marketing/images/agents.png'
                },
                {
                    dest: 'dist/marketing/images/capture.png'
                },
                {
                    dest: 'dist/marketing/images/contact.png'
                },
                {
                    dest: 'dist/marketing/images/facebook.png'
                },
                {
                    dest: 'dist/marketing/images/howdo.png'
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
                    dest: 'dist/marketing/images/whatsthejob.png'
                }
            ]
        },
        production: {
            options: {
                distribution: 'E317G7EK3NBS4R'
            },
            files: [
                {
                    dest: 'dist/thirdchannel/css/main.css'
                },
                {
                    dest: 'dist/thirdchannel/js/app.js'
                },
                {
                    dest: 'dist/thirdchannel/js/app.js.map'
                },
                {
                    dest: 'dist/thirdchannel/js/require.js'
                },
                {
                    dest: 'dist/singleNickel/css/main.css'
                },
                {
                    dest: 'dist/singleNickel/js/app.js'
                },
                {
                    dest: 'dist/singleNickel/js/app.js.map'
                },
                {
                    dest: 'dist/marketing/css/main.css'
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
                    dest: 'dist/marketing/images/agents.png'
                },
                {
                    dest: 'dist/marketing/images/capture.png'
                },
                {
                    dest: 'dist/marketing/images/contact.png'
                },
                {
                    dest: 'dist/marketing/images/facebook.png'
                },
                {
                    dest: 'dist/marketing/images/howdo.png'
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
                    dest: 'dist/marketing/images/whatsthejob.png'
                }
            ]
        }
    };
};