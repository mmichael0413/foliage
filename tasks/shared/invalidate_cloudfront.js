/**
 * invalidate_cloudfront
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    var fileList = [
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.eot'
        },
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.svg'
        },
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.ttf'
        },
        {
            dest: 'dist/shared/fonts/nexa_bold-webfont.woff'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.eot'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.svg'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.ttf'
        },
        {
            dest: 'dist/shared/fonts/nexa_light-webfont.woff'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_b7e691b9a4b396946511c1c8e5cb804b.eot'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_b7e691b9a4b396946511c1c8e5cb804b.svg'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_b7e691b9a4b396946511c1c8e5cb804b.ttf'
        },
        {
            dest: 'dist/shared/fonts/tc-icons_b7e691b9a4b396946511c1c8e5cb804b.woff'
        },
        {
            dest: 'dist/shared/fonts/tpcicons_17c256bff985f337b3bbf51a6da4645e.woff'
        },
        {
            dest: 'dist/shared/fonts/sc-icons_17c256bff985f337b3bbf51a6da4645e.woff'
        },
        {
            dest: 'dist/shared/fonts/sp-icons_17c256bff985f337b3bbf51a6da4645e.woff'
        },
        {
            dest: 'dist/shared/fonts/sp-icons_17c256bff985f337b3bbf51a6da4645e.woff'
        }
    ];

    return {
        shared: {
            options: {
                key: process.env.AWS_ACCESS_KEY_ID, // Use the variables
                secret: process.env.AWS_SECRET_ACCESS_KEY, // You can also use env variables
                region: "us-east-1"
            },
            staging: {
                options: {
                    distribution: 'EQW05WM7P779I'
                },
                files: fileList
            },
            production: {
                options: {
                    distribution: 'E317G7EK3NBS4R'
                },
                files: fileList
            }
        }

    };
};
