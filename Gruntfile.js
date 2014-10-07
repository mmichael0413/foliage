/*global module, require */
/*jslint regexp: true */

module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: ["nodemon", "watch"],
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
                        "NODE_ENV": "development",
                        "NODE_CONFIG": "dev"
                    },
                    watch: ["server"],
                    delay: 300,

                    callback: function(nodemon) {
                        nodemon.on('log', function(event) {
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
        requirejs: {
            compile: {
                // see full list of options here: https://github.com/jrburke/r.js/blob/master/build/example.build.js
                options: {
                    
                    mainConfigFile : "js/app/init.js",
                    baseUrl : "js",
                    name: "app/init",
                    out: "dist/app.js",
                    removeCombined: true,
                    findNestedDependencies: true,
                    generateSourceMaps: true,
                    optimize: "uglify2",
                    preserveLicenseComments: false
                }
            }
        },
        jshint: {
            // the all task covers all files, excluding the hbs-compiled (auto-generated) and any libs we use (we didn't write them)
            all: ['Gruntfile.js', 'js/app/**/*.js'],
            options: {
                ignores: [
                    'js/app/templates/hbs-compiled.js',
                    'js/compiled-app.js',
                    'js/libs/**/*.js'
                ]
            }
        },
        handlebars: {
            compile: {
                options: {
                    // so we can use it with require!
                    amd: true,
                    namespace: "ThirdChannel.templates",
                    processName: function(filename) {
                        var names = filename.split("/");
                        return names[names.length - 1].substring(0, names[names.length - 1].length - 4);
                    }
                },
                files: {
                    "js/app/templates/hbs-compiled.js": "templates/handlebars/**/*.hbs"
                }
            }
        },
        watch: {
            sass: {
                files: ['css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    port: 3001,
                    livereload: true
                }
            },
            hbs: {
                files: ['templates/handlebars/**/*.hbs'],
                tasks: ['handlebars'],
                options: {
                    spawn: false
                }
            },
            jshint: {
                // watch for changes in either the app or test, but run the js task, which covers all relevant files
                files: ['js/**/*.js', 'js/test/**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', ['concurrent:dev']);

};
