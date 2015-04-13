/**
 * aws_s3:procrastination
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        procrastination: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/procrastination', cwd: 'backup/staging/procrastination/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/procrastination', src: ['**'], dest: 'backup/procrastination/'+ new Date().getTime()},
                    {dest: 'dist/procrastination/', action: 'delete'},
                    {expand: true, cwd: 'dist/procrastination/', src: ['**'], dest: 'dist/procrastination/'}
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
                    {dest: 'dist/procrastination/', cwd: 'backup/production/procrastination/', action: 'download'},
                    {expand: true, cwd: 'backup/procrastination/production', src: ['**'], dest: 'backup/procrastination/'+ new Date().getTime()},
                    {dest: 'dist/procrastination/', action: 'delete'},
                    {expand: true, cwd: 'dist/procrastination/', src: ['**'], dest: 'dist/procrastination/'}
                ]
            }
        }

    };
};