/**
 * aws_s3:territory
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        territory: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/territory', cwd: 'backup/staging/territory/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/territory', src: ['**'], dest: 'backup/territory/'+ new Date().getTime()},
                    {dest: 'dist/territory/', action: 'delete'},
                    {expand: true, cwd: 'dist/territory/', src: ['**'], dest: 'dist/territory/'}
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
                    {dest: 'dist/territory/', cwd: 'backup/production/territory/', action: 'download'},
                    {expand: true, cwd: 'backup/territory/production', src: ['**'], dest: 'backup/territory/'+ new Date().getTime()},
                    {dest: 'dist/territory/', action: 'delete'},
                    {expand: true, cwd: 'dist/territory/', src: ['**'], dest: 'dist/territory/'}
                ]
            }
        }

    };
};