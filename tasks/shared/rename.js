/**
 * copy
 * ==========
 *
 */

"use strict";

module.exports = function(grunt) {
    return {
        shared: {
            files: [
                // Shared dist files.
                {src: ['js/libs/bower_components/c3/c3.css'], dest: 'js/libs/bower_components/c3/_c3.scss'},
                {src: ['js/libs/bower_components/datetimepicker/jquery.datetimepicker.css'], dest: 'js/libs/bower_components/datetimepicker/_jquery.datetimepicker.scss'},
                {src: ['js/libs/bower_components/normalize-css/normalize.css'], dest: 'js/libs/bower_components/normalize-css/_normalize.scss'},
                {src: ['js/libs/bower_components/slidebars/development/slidebars.css'], dest: 'js/libs/bower_components/slidebars/development/_slidebars.scss'},
                {src: ['js/libs/bower_components/backbone-modal/backbone.modals.css'], dest: 'js/libs/bower_components/backbone-modal/_backbone.modals.scss'},
                {src: ['js/libs/bower_components/backbone-modal/backbone.modals.theme.css'], dest: 'js/libs/bower_components/backbone-modal/_backbone.modals.theme.scss'}
            ]
        }
    };
};