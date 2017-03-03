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
                        'dist/shared/fonts/tc-icons_4d999ad5bae3a80901e87cdef62c8114.woff': 'application/font-woff',
                        'dist/shared/fonts/sp-icons_17c256bff985f337b3bbf51a6da4645e.woff': 'application/font-woff'
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
                        'dist/shared/fonts/tc-icons_4d999ad5bae3a80901e87cdef62c8114.woff': 'application/font-woff',
                        'dist/shared/fonts/sp-icons_17c256bff985f337b3bbf51a6da4645e.woff': 'application/font-woff'
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
