/*global module, require */
/*jslint regexp: true */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
         concurrent: {
            dev: [ "nodemon", "watch"],
            options: {
                logConcurrentOutput: true
            }
        },
        nodemon: {
            dev: {
                script: 'app.js',
                options: {
                    /** Environment variables required by the NODE application **/
                    env: {
                          "NODE_ENV": "development"
                        , "NODE_CONFIG": "dev"
                    },
                    watch: ["server"],
                    delay: 300,

                    callback: function (nodemon) {
                        nodemon.on('log', function (event) {
                            console.log(event.colour);
                        });
                    }
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'css/dist/global.css': 'css/scss/apps/global/main.scss',
                    'css/dist/thirdchannel.css': 'css/scss/apps/thirdchannel/main.scss'
                }
            }
        },

        watch: {
            sass: {
                files: ['css/**/*.scss'],
                tasks: ['sass'],
                options:{
                    port: 3001,
                    livereload: true
                }
            }
        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");

    grunt.registerTask('default', ['concurrent:dev']);

};