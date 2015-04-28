/**
 * aws_s3
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        shared: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    },
                    mime: {
                        'dist/shared/fonts/nexa_bold-webfont.woff': 'application/font-woff',
                        'dist/shared/fonts/nexa_light-webfont.woff': 'application/font-woff',
                        'dist/shared/fonts/tc-icons_822f1db99fd30a1b15edf1a3e5d340d4.woff': 'application/font-woff'
                    }
                },
                files: [
                    {dest: 'dist/shared/', cwd: 'backup/staging/shared/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/shared', src: ['**'], dest: 'backup/shared/' + new Date().getTime()},
                    {dest: 'dist/shared/', action: 'delete'},
                    {expand: true, cwd: 'dist/shared/', src: ['**'], dest: 'dist/shared/'}
                ]
            },
            production: {
                options: {
                    bucket: 'thirdchannel-assets',
                    params: {
                        CacheControl: 'public, max-age=30'
                    },
                    mime: {
                        'dist/shared/fonts/nexa_bold-webfont.woff': 'application/font-woff',
                        'dist/shared/fonts/nexa_light-webfont.woff': 'application/font-woff',
                        'dist/shared/fonts/tc-icons_822f1db99fd30a1b15edf1a3e5d340d4.woff': 'application/font-woff'
                    }
                },
                files: [
                    {dest: 'dist/shared/', cwd: 'backup/production/shared/', action: 'download'},
                    {expand: true, cwd: 'backup/production/shared', src: ['**'], dest: 'backup/shared/'+ new Date().getTime()},
                    {dest: 'dist/shared/', action: 'delete'},
                    {expand: true, cwd: 'dist/shared/', src: ['**'], dest: 'dist/shared/'}
                ]
            }
        }
    };
};