/**
 * aws_s3
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        singleNickel: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/singleNickel', cwd: 'backup/staging/singleNickel', action: 'download'},
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
        }
    };
};