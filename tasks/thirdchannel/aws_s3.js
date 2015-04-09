/**
 * aws_s3:thirdchannel
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        thirdchannel: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/thirdchannel', cwd: 'backup/staging/thirdchannel/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/thirdchannel', src: ['**'], dest: 'backup/thirdchannel/'+ new Date().getTime()},
                    {dest: 'dist/thirdchannel/', action: 'delete'},
                    {expand: true, cwd: 'dist/thirdchannel/', src: ['**'], dest: 'dist/thirdchannel/'}
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
                    {dest: 'dist/thirdchannel/', cwd: 'backup/production/thirdchannel/', action: 'download'},
                    {expand: true, cwd: 'backup/thirdchannel/production', src: ['**'], dest: 'backup/thirdchannel/'+ new Date().getTime()},
                    {dest: 'dist/thirdchannel/', action: 'delete'},
                    {expand: true, cwd: 'dist/thirdchannel/', src: ['**'], dest: 'dist/thirdchannel/'}
                ]
            }
        }

    };
};