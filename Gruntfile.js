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

        pure_grids: {
            responsive: {
                dest: 'css/scss/lib/pure.responsive-grid.scss',

                options: {
                    units: [2, 3, 4, 5, 12], // 5-column grid and 12-column grid

                    mediaQueries: {
                        //xl: 'screen and (max-width: 80em)'    // 1280px
                        //lg: 'screen and (max-width: 64em)',   // 1024px
                        md: 'screen and (max-width: 48em)',   // 768px
                        sm: 'screen and (max-width: 35.5em)' // 568px
                    },
                    selectorPrefix: '.col-'
                }
            }
        },

        sass: {
            dist: {
                files: {
                    'dist/global/css/global.css': 'css/scss/apps/global/main.scss',
                    'dist/thirdchannel/css/main.css': 'css/scss/apps/thirdchannel/main.scss'
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
                    out: "dist/thirdchannel/js/app.js",
                    removeCombined: true,
                    findNestedDependencies: true,
                    generateSourceMaps: true,
                    optimize: "uglify2",
                    preserveLicenseComments: false
                }
            }
        },
        clean: ["dist"],
        copy: {
            main: {
                files: [
                    // ThirdChannel dist files.
                    {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/thirdchannel/js', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/thirdchannel/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['images/*'], dest: 'dist/thirdchannel/images/', filter: 'isFile'}
                ]
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
                        return filename.replace('templates/handlebars/', '').replace('.hbs', '');
                    }
                },
                files: {
                    "js/app/templates/hbs-compiled.js": "templates/handlebars/**/*.hbs"
                }
            }
        },
        aws_s3: {
            options: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Use the variables
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY // You can also use env variables
            },
            staging: {
                options: {
                    bucket: 'thirdchannel-assets-staging',
                    params: {
                        CacheControl: 'public, max-age=30'
                    },
                    mime: {
                        'dist/thirdchannel/fonts/nexa_bold-webfont.woff': 'application/font-woff',
                        'dist/thirdchannel/fonts/nexa_light-webfont.woff': 'application/font-woff',
                        'dist/thirdchannel/fonts/tc-icons_6e130a4e526e6c444098f7055986eb13.woff': 'application/font-woff'
                    }
                },
                files: [
                    {dest: 'dist/thirdchannel/', cwd: 'backup/thirdchannel/staging/', action: 'download'},
                    {expand: true, cwd: 'backup/thirdchannel/staging', src: ['**'], dest: 'backup/thirdchannel/'+ new Date().getTime()},
                    {dest: 'dist/thirdchannel/', action: 'delete'},
                    {expand: true, cwd: 'dist/thirdchannel/', src: ['**'], dest: 'dist/thirdchannel/'}
                ]
            },
            production: {
                options: {
                    bucket: 'thirdchannel-assets'
                },
                files: [
                    {dest: 'dist/thirdchannel/', cwd: 'backup/thirdchannel/production/', action: 'download'},
                    {expand: true, cwd: 'backup/thirdchannel/production', src: ['**'], dest: 'backup/thirdchannel/'+ new Date().getTime()},
                    {dest: 'dist/thirdchannel/', action: 'delete'},
                    {expand: true, cwd: 'dist/thirdchannel/', src: ['**'], dest: 'dist/thirdchannel/'}
                ]
            }
        },
        watch: {
            sass: {
                files: ['css/**/*.scss'],
                tasks: ['sass', 'copy'],
                options: {
                    port: 3001,
                    livereload: true
                }
            },
            hbs: {
                files: ['templates/handlebars/**/*.hbs'],
                tasks: ['handlebars', 'copy'],
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
            },
            rjs: {
                files: ['js/app/**/*.js', '!js/app/handlebars/templates.js'],
                tasks: ['requirejs', 'copy']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks("grunt-nodemon");
    grunt.loadNpmTasks("grunt-concurrent");
    grunt.loadNpmTasks('grunt-pure-grids');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-aws-s3');

    grunt.registerTask('default', ['concurrent:dev']);
    grunt.registerTask('build-dev', ['clean', 'sass','handlebars','requirejs','copy']);
    grunt.registerTask('build-beta', ['clean', 'sass','handlebars','requirejs','copy', 'aws_s3:staging']);
    grunt.registerTask('build-prod', ['clean', 'sass','handlebars','requirejs','copy', 'aws_s3:production']);

};
