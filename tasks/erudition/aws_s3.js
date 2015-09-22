/**
 * aws_s3:erudition
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        erudition: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/erudition', cwd: 'backup/staging/erudition/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/erudition', src: ['**'], dest: 'backup/erudition/'+ new Date().getTime()},
                    {dest: 'dist/erudition/', action: 'delete'},
                    {expand: true, cwd: 'dist/erudition/', src: ['**'], dest: 'dist/erudition/'}
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
                    {dest: 'dist/erudition/', cwd: 'backup/production/erudition/', action: 'download'},
                    {expand: true, cwd: 'backup/erudition/production', src: ['**'], dest: 'backup/erudition/'+ new Date().getTime()},
                    {dest: 'dist/erudition/', action: 'delete'},
                    {expand: true, cwd: 'dist/erudition/', src: ['**'], dest: 'dist/erudition/'}
                ]
            }
        }

    };
};