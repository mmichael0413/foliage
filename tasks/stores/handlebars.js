/**
 * handlebars:stores
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        stores: {
            options: {
                // so we can use it with require!
                amd: true,
                namespace: 'Stores.templates',
                processName: function(filename) {
                    return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                }
            },
            files: {
                'js/apps/stores/templates/hbs-compiled.js': [
                    'templates/handlebars/shared/**/*.hbs',
                    'templates/handlebars/thirdchannel/filters/**/*.hbs',
                    'templates/handlebars/thirdchannel/pagination.hbs',
                    'templates/handlebars/thirdchannel/filter_active_item.hbs',
                    'templates/handlebars/stores/**/*.hbs'
                ]
            }
        }
    };
};