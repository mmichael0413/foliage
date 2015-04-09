/**
 * aws_s3:bigTastysBackDoor
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        bigTastysBackDoor: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/bigTastysBackDoor', cwd: 'backup/staging/bigTastysBackDoor/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/bigTastysBackDoor', src: ['**'], dest: 'backup/bigTastysBackDoor/'+ new Date().getTime()},
                    {dest: 'dist/bigTastysBackDoor/', action: 'delete'},
                    {expand: true, cwd: 'dist/bigTastysBackDoor/', src: ['**'], dest: 'dist/bigTastysBackDoor/'}
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
                    {dest: 'dist/bigTastysBackDoor/', cwd: 'backup/production/bigTastysBackDoor/', action: 'download'},
                    {expand: true, cwd: 'backup/bigTastysBackDoor/production', src: ['**'], dest: 'backup/bigTastysBackDoor/'+ new Date().getTime()},
                    {dest: 'dist/bigTastysBackDoor/', action: 'delete'},
                    {expand: true, cwd: 'dist/bigTastysBackDoor/', src: ['**'], dest: 'dist/bigTastysBackDoor/'}
                ]
            }
        }

    };
};