/**
 * aws_s3:marketing
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        marketing: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/marketing', cwd: 'backup/staging/marketing/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/marketing', src: ['**'], dest: 'backup/marketing/'+ new Date().getTime()},
                    {dest: 'dist/marketing/', action: 'delete'},
                    {expand: true, cwd: 'dist/marketing/', src: ['**'], dest: 'dist/marketing/'}
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
                    {dest: 'dist/marketing/', cwd: 'backup/production/marketing/', action: 'download'},
                    {expand: true, cwd: 'backup/marketing/production', src: ['**'], dest: 'backup/marketing/'+ new Date().getTime()},
                    {dest: 'dist/marketing/', action: 'delete'},
                    {expand: true, cwd: 'dist/marketing/', src: ['**'], dest: 'dist/marketing/'}
                ]
            }
        }

    };
};