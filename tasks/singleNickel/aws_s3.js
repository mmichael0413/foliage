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
                }
            },
            files: [
                {dest: 'dist/', cwd: 'backup/staging/singleNickel', action: 'download'},
                {expand: true, cwd: 'backup/staging/singleNickel', src: ['**'], dest: 'backup/singleNickel/'+ new Date().getTime()},
                {dest: 'dist/singleNickel', action: 'delete'},
                {expand: true, cwd: 'dist/singleNickel', src: ['**'], dest: 'dist/singleNickel'}
            ]
        },
        production: {
            options: {
                bucket: 'thirdchannel-assets',
                params: {
                    CacheControl: 'public, max-age=30'
                }
            },
            files: [
                {dest: 'dist/', cwd: 'backup/production/singleNickel', action: 'download'},
                {expand: true, cwd: 'backup/production/singleNickel', src: ['**'], dest: 'backup/singleNickel/'+ new Date().getTime()},
                {dest: 'dist/singleNickel', action: 'delete'},
                {expand: true, cwd: 'dist/singleNickel', src: ['**'], dest: 'dist/singleNickel'}
            ]
        }
    };
};