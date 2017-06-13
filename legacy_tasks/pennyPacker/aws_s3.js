/**
 * aws_s3:pennyPacker
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        pennyPacker: {
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    }
                },
                files: [
                    {dest: 'dist/pennyPacker', cwd: 'backup/staging/pennyPacker/', action: 'download'},
                    {expand: true, cwd: 'backup/staging/pennyPacker', src: ['**'], dest: 'backup/pennyPacker/'+ new Date().getTime()},
                    {dest: 'dist/pennyPacker/', action: 'delete'},
                    {expand: true, cwd: 'dist/pennyPacker/', src: ['**'], dest: 'dist/pennyPacker/'}
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
                    {dest: 'dist/pennyPacker/', cwd: 'backup/production/pennyPacker/', action: 'download'},
                    {expand: true, cwd: 'backup/pennyPacker/production', src: ['**'], dest: 'backup/pennyPacker/'+ new Date().getTime()},
                    {dest: 'dist/pennyPacker/', action: 'delete'},
                    {expand: true, cwd: 'dist/pennyPacker/', src: ['**'], dest: 'dist/pennyPacker/'}
                ]
            }
        }

    };
};