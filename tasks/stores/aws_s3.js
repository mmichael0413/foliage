/**
 * aws_s3
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        stores: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/stores', cwd: 'backup/staging/stores', action: 'download'},
                    {expand: true, cwd: 'backup/staging/stores', src: ['**'], dest: 'backup/stores/'+ new Date().getTime()},
                    {dest: 'dist/stores', action: 'delete'},
                    {expand: true, cwd: 'dist/stores', src: ['**'], dest: 'dist/stores'}
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
                    {dest: 'dist/', cwd: 'backup/production/stores', action: 'download'},
                    {expand: true, cwd: 'backup/production/stores', src: ['**'], dest: 'backup/stores/'+ new Date().getTime()},
                    {dest: 'dist/stores', action: 'delete'},
                    {expand: true, cwd: 'dist/stores', src: ['**'], dest: 'dist/stores'}
                ]
            }
        }
    };
};