/**
 * aws_s3:oddjob
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        oddjob: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/oddjob', cwd: 'backup/staging/oddjob/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/oddjob', src: ['**'], dest: 'backup/oddjob/'+ new Date().getTime()},
                    {dest: 'dist/oddjob/', action: 'delete'},
                    {expand: true, cwd: 'dist/oddjob/', src: ['**'], dest: 'dist/oddjob/'}
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
                    {dest: 'dist/oddjob/', cwd: 'backup/production/oddjob/', action: 'download'},
                    {expand: true, cwd: 'backup/oddjob/production', src: ['**'], dest: 'backup/oddjob/'+ new Date().getTime()},
                    {dest: 'dist/oddjob/', action: 'delete'},
                    {expand: true, cwd: 'dist/oddjob/', src: ['**'], dest: 'dist/oddjob/'}
                ]
            }
        }

    };
};