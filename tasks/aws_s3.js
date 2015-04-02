/**
 * aws_s3
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        options: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Use the variables
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY // You can also use env variables
        },
        staging: {
            options: {
                bucket: 'thirdchannel-assets-staging',
                params: {
                    CacheControl: 'public, max-age=30'
                },
                mime: {
                    'dist/thirdchannel/fonts/nexa_bold-webfont.woff': 'application/font-woff',
                    'dist/thirdchannel/fonts/nexa_light-webfont.woff': 'application/font-woff',
                    'dist/thirdchannel/fonts/tc-icons_382277c86c3cb9fc70127c36838f5043.woff': 'application/font-woff'
                }
            },
            files: [
                {dest: 'dist/', cwd: 'backup/staging/', action: 'download'},
                {expand: true, cwd: 'backup/staging', src: ['**'], dest: 'backup/'+ new Date().getTime()},
                {dest: 'dist/', action: 'delete'},
                {expand: true, cwd: 'dist/', src: ['**'], dest: 'dist/'}
            ]
        },
        production: {
            options: {
                bucket: 'thirdchannel-assets',
                params: {
                    CacheControl: 'public, max-age=30'
                },
                mime: {
                    'dist/thirdchannel/fonts/nexa_bold-webfont.woff': 'application/font-woff',
                    'dist/thirdchannel/fonts/nexa_light-webfont.woff': 'application/font-woff',
                    'dist/thirdchannel/fonts/tc-icons_382277c86c3cb9fc70127c36838f5043.woff': 'application/font-woff'
                }
            },
            files: [
                {dest: 'dist/', cwd: 'backup/production/', action: 'download'},
                {expand: true, cwd: 'backup/production', src: ['**'], dest: 'backup/'+ new Date().getTime()},
                {dest: 'dist/', action: 'delete'},
                {expand: true, cwd: 'dist/', src: ['**'], dest: 'dist/'}
            ]
        }
    };
};