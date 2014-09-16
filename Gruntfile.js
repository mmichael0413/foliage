/*global module, require */
/*jslint regexp: true */

module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        sass: {
            dist: {
                files: {
                    'css/styles.css': 'css/scss/styles.scss'
                }
            }
        },
//        handlebars: {
//            compile: {
//                options: {
//                    amd: true,
//                    namespace: "3c.templates",
//                    processName: function (filename) {
//                        return filename.replace(/.+\//, '').replace('.hbs', '');
//                    }
//                },
//
//                files: {
//                    'js/app/handlebars/templates.js': 'js/app/handlebars/hbs/*.hbs'
//                }
//            }
//        },
//        // config for the RequireJS optimizer
//        requirejs: {
//            compile: {
//                // see full list of options here: https://github.com/jrburke/r.js/blob/master/build/example.build.js
//                options: {
////                    //dir: "./js",
////                    name: "app/init",
////                    baseUrl: "./js/",
////                    //appDir: "./js/",
////                    mainConfigFile: "./js/app/init.js",
////                    //name: "libs/require",
////                    out: "main.js",
////                    preserveLicenseComments: false,
////                    optimize: "uglify2",
////                    uglify2: {
////                        "mangle": true
////                    },
////                    generateSourceMaps: true
//
//                    //appDir: "./js",
//
//                    appDir: "",
//                    baseUrl: "./js/",
//                    dir: "./js/appdirectory-build",
//                    mainConfigFile: "./js/app/init.js",
//                    modules: [
//                        {
//                            name: "app/init"
//
//                        }
//                    ]
//                }
//            }
//        },
        watch: {
            sass: {
                files: ['css/**/*.scss'],
                tasks: ['sass'],
                options:{
                    port: 3001,
                    livereload: true
                }
            }
//            handlebars: {
//                files: ['js/app/handlebars/hbs/**/*.hbs'],
//                tasks: ['handlebars']
//            }

        }
    });


    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
   // grunt.loadNpmTasks('grunt-contrib-requirejs');
   // grunt.loadNpmTasks('grunt-contrib-handlebars');

    //grunt.registerTask('default', ['sass', 'handlebars']);
    grunt.registerTask('default', ['sass']);

};