/*global module, require */
/*jslint regexp: true */


/**
 *
 * Wrapper to perform an operation on each matching path item. Could be a file or a directory.
 * Each item will be passed to a callback - fn - which will receive the following arguments: 
 * - the name of the item (e.g. the last position in the file path)
 * - the full path
 * - the tokenized breakup of the path
 * 
 */
function operateOnPaths(grunt, path, fn) {
    var appPaths = grunt.file.expand(path),
        tokens,
        name,
        i = appPaths.length;

    while(i--) {
        tokens = appPaths[i].split('/');
        // callback that fn utilizes
        // name, path, tokens
        fn(tokens[tokens.length-1], appPaths[i], tokens);
    }
}

/**
 *
 * Builds the requirejs task blocks. Generally one for each app / service
 * 
 */
function buildRequireJSConfig(grunt) {
    var config = {};
    operateOnPaths(grunt, 'js/apps/*', function (name, path, tokens) {
        // checking if the path exists, so that we can have additional 'apps' containing shared modules
        // which we don't necessarily want to build
        if (grunt.file.exists(path + '/init.js')) {
            config[name] = {
                options: {
                    mainConfigFile: path +"/init.js",
                    baseUrl: 'js/apps',
                    name: name + '/init',
                    out: 'dist/' + name + '/js/app.js',
                    removeCombined: true,
                    findNestedDependencies: true,
                    generateSourceMaps: true,
                    optimize: "uglify2",
                    preserveLicenseComments: false
                }
            };    
        }
        
    });
        
    return config;
}

/**
 * Builds the Sass configuration for each app
 * 
 * @param  {grunt} grunt The grunt object
 * @return {object} The Sass file configuration
 */
function buildSassConfig(grunt) {
    /*
    files: {
                    'dist/global/css/global.css': 'css/scss/apps/global/main.scss',
                    'dist/thirdchannel/css/main.css': 'css/scss/apps/thirdchannel/main.scss',
                    'dist/territory/css/main.css': 'css/scss/apps/territory/main.scss'
                }
     */
    var files = {};
    operateOnPaths(grunt, 'css/scss/apps/*', function (name, path, tokens) {
        if (grunt.file.exists(path + '/main.scss')) {
            files['dist/' + name + '/css/main.css'] = path + '/main.scss';    
        } else {
            console.warn("Ignoring '" + path + "'' because it contains no 'main.scss'");
        }
        
    });
    return files;
}


function buildKarmaOptions(serviceName, additionalPaths, additionalExcludes) {
    var options = {frameworks: ['jasmine', 'requirejs']},
        // the included: false is mandatory in order to be loaded with requirejs; ignoring this causes the scripts to be loaded in
        // phantom, which causes requirejs to fail as the scripts have all ready been processed.
        // some libraries, Like jquery and backbone, are already AMD and should be included via false

        files = [
                "js/libs/bower_components/underscore/underscore.js",
                "js/libs/bower_components/handlebars/handlebars.min.js",
                {pattern: "js/libs/bower_components/jquery/jquery.min.js", included: false},
                {pattern: "js/libs/bower_components/backbone/backbone.js", included: false},
                {pattern: "js/libs/bower_components/backbone-validator/backbone-validator.js", included: false},
                {pattern: "js/apps/shared/**/*.js", included: false},
                {pattern: "js/tests/shared/**/*.js", included: false}
            ],
        excludes = ['js/app/**/init.js'];
    if (additionalPaths) {
        files = files.concat(additionalPaths);
    }
    if (additionalExcludes) {
        excludes =  excludes.concat(additionalExcludes);
    }
    

    files = files.concat([
        {pattern: "js/apps/" + serviceName + "/**/*.js", included: false},
        {pattern: "js/tests/" + serviceName +"/**/*.js", included: false},
        "js/tests/" + serviceName +"-init.js"
    ]);
    options.files = files;
    options.exclude = excludes;

    return options;
}


/**
 * 
 * The main Grunt config file
 * 
 */
module.exports = function(grunt) {
    'use strict';

    var requireConfig = buildRequireJSConfig(grunt),
        sassConfig = buildSassConfig(grunt);



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
        /**
         * 
         * Task to custom configure our grids
         * 
         */
        pure_grids: {
            responsive: {
                dest: 'css/scss/lib/pure.responsive-grid.scss',

                options: {
                    units: [2, 3, 4, 5, 7, 12], // 5-column grid and 12-column grid

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
        /**
         * 
         * SASS!
         * 
         */
        sass: {
            dist: {
                files: sassConfig
            }
        },
        /**
         *
         * Configuration for RequireJS; built by custom functionality declared above
         * 
         */
        requirejs: requireConfig,

        /**
         * 
         * Which folders to clean up
         */
        clean: ["dist"],

        /**
         * 
         * 
         */
        copy: {
            main: {
                files: [
                    // ThirdChannel dist files.
                    {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/thirdchannel/js', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/marketing/js', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/bigTastysBackDoor/js', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/singleNickel/js', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['js/libs/bower_components/requirejs/require.js'], dest: 'dist/pennyPacker/js', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/thirdchannel/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/marketing/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/territory/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/bigTastysBackDoor/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/singleNickel/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['fonts/*'], dest: 'dist/pennyPacker/fonts/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['images/thirdchannel/*'], dest: 'dist/thirdchannel/images/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['js/libs/bower_components/slick.js/slick/ajax-loader.gif'], dest: 'dist/thirdchannel/css/', filter: 'isFile'},
                    {expand: true, flatten: true, src: ['images/marketing/*'], dest: 'dist/marketing/images/', filter: 'isFile'}
                ]
            }
        },
        /**
         * 
         *
         *
         * 
         */
        jshint: {
            // the all task covers all files, excluding the hbs-compiled (auto-generated) and any libs we use (we didn't write them)
            all: ['Gruntfile.js', 'js/apps/**/*.js'],
            options: {
                ignores: [
                    '**/hbs-compiled.js',
                    'js/compiled-app.js',
                    'js/libs/**/*.js'
                ]
            }
        },

        /**
         * 
         * Karma testing configuration
         *
         * 
         */
        karma: {
            
            options: {
                // Ideally we want to run in background mode... but I'm running into a open file limit due to the grunt
                // watch task. Need to research how to raise the upper limit on the max file descriptors before proceeding
                //background: true,
                singleRun: true,
                browsers: ['PhantomJS'],
                basePath: "",
                reporters: ['dots'],
                
            },

            thirdchannel: {
                options: buildKarmaOptions('thirdchannel')
            },
            // thirdchannel_single: {
                
            //     reporters: ['dots'],
            //     options: buildKarmaOptions('thirdchannel')  
            // },

            territory: {
                options: buildKarmaOptions('territory')
            },

            // territory_single: {
            //     background: false,
            //     singleRun: true,
            //     reporters: ['dots'],
            //     options: buildKarmaOptions('territory')    
            // }
        },

        /**
         * 
         *
         *
         * 
         */
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
                    "js/apps/thirdchannel/templates/hbs-compiled.js": ["templates/handlebars/thirdchannel/**/*.hbs",
                                                                        "templates/handlebars/shared/**/*.hbs",
                                                                        "templates/handlebars/pennyPacker/**/*.hbs"],
                    "js/apps/singleNickel/templates/hbs-compiled.js": ["templates/handlebars/singleNickel/**/*.hbs", "templates/handlebars/shared/**/*.hbs"]
                }
            }
        },
        /**
         * 
         * 
         * 
         */
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
                    {dest: 'dist/', cwd: 'backup/staging/', action: 'download'},
                    {expand: true, cwd: 'backup/staging', src: ['**'], dest: 'backup/'+ new Date().getTime()},
                    {dest: 'dist/', action: 'delete'},
                    {expand: true, cwd: 'dist/', src: ['**'], dest: 'dist/'}
                ]
            },
            production: {
                options: {
                    bucket: 'thirdchannel-assets',
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
                    {dest: 'dist/', cwd: 'backup/production/', action: 'download'},
                    {expand: true, cwd: 'backup/production', src: ['**'], dest: 'backup/'+ new Date().getTime()},
                    {dest: 'dist/', action: 'delete'},
                    {expand: true, cwd: 'dist/', src: ['**'], dest: 'dist/'}
                ]
            }
        },
        /**
         * 
         * 
         *
         * 
         */

        invalidate_cloudfront: {
            options: {
                key: process.env.AWS_ACCESS_KEY_ID, // Use the variables
                secret: process.env.AWS_SECRET_ACCESS_KEY, // You can also use env variables
                region: "us-east-1"
            },
            staging: {
                options: {
                    distribution: 'EQW05WM7P779I'
                },
                files: [
                    {
                        dest: 'dist/thirdchannel/css/main.css'
                    },
                    {
                        dest: 'dist/thirdchannel/js/app.js'
                    },
                    {
                        dest: 'dist/thirdchannel/js/app.js.map'
                    },
                    {
                        dest: 'dist/thirdchannel/js/require.js'
                    },
                    {
                        dest: 'dist/singleNickel/css/main.css'
                    },
                    {
                        dest: 'dist/singleNickel/js/app.js'
                    },
                    {
                        dest: 'dist/singleNickel/js/app.js.map'
                    },
                    {
                        dest: 'dist/singleNickel/js/require.js'
                    },
                    {
                        dest: 'dist/marketing/css/main.css'
                    },
                    {
                        dest: 'dist/marketing/js/app.js'
                    },
                    {
                        dest: 'dist/marketing/js/app.js.map'
                    },
                    {
                        dest: 'dist/marketing/js/require.js'
                    },
                    {
                        dest: 'dist/marketing/images/agents.jpg'
                    },
                    {
                        dest: 'dist/marketing/images/agents.png'
                    },
                    {
                        dest: 'dist/marketing/images/capture.png'
                    },
                    {
                        dest: 'dist/marketing/images/contact.png'
                    },
                    {
                        dest: 'dist/marketing/images/facebook.png'
                    },
                    {
                        dest: 'dist/marketing/images/howdo.png'
                    },
                    {
                        dest: 'dist/marketing/images/linkedin.png'
                    },
                    {
                        dest: 'dist/marketing/images/maximize.png'
                    },
                    {
                        dest: 'dist/marketing/images/maximize.jpg'
                    },
                    {
                        dest: 'dist/marketing/images/whatsthejob.png'
                    }
                ]
            },
            production: {
                options: {
                    distribution: 'E317G7EK3NBS4R'
                },
                files: [
                    {
                        dest: 'dist/thirdchannel/css/main.css'
                    },
                    {
                        dest: 'dist/thirdchannel/js/app.js'
                    },
                    {
                        dest: 'dist/thirdchannel/js/app.js.map'
                    },
                    {
                        dest: 'dist/thirdchannel/js/require.js'
                    },
                    {
                        dest: 'dist/singleNickel/css/main.css'
                    },
                    {
                        dest: 'dist/singleNickel/js/app.js'
                    },
                    {
                        dest: 'dist/singleNickel/js/app.js.map'
                    },
                    {
                        dest: 'dist/singleNickel/js/require.js'
                    },
                    {
                        dest: 'dist/marketing/css/main.css'
                    },
                    {
                        dest: 'dist/marketing/js/app.js'
                    },
                    {
                        dest: 'dist/marketing/js/app.js.map'
                    },
                    {
                        dest: 'dist/marketing/js/require.js'
                    },
                    {
                        dest: 'dist/marketing/images/agents.jpg'
                    },
                    {
                        dest: 'dist/marketing/images/agents.png'
                    },
                    {
                        dest: 'dist/marketing/images/capture.png'
                    },
                    {
                        dest: 'dist/marketing/images/contact.png'
                    },
                    {
                        dest: 'dist/marketing/images/facebook.png'
                    },
                    {
                        dest: 'dist/marketing/images/howdo.png'
                    },
                    {
                        dest: 'dist/marketing/images/linkedin.png'
                    },
                    {
                        dest: 'dist/marketing/images/maximize.png'
                    },
                    {
                        dest: 'dist/marketing/images/maximize.jpg'
                    },
                    {
                        dest: 'dist/marketing/images/whatsthejob.png'
                    }
                ]
            }
        },

        watch: {
            options: { interval: 5007 },
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
            // Temporarily disable on file change rebuild of requirejs, preserve it for when we actually push.
            // 
            // rjs: {
            //     files: ['js/apps/**/*.js', '!js/apps/thirdchannel/handlebars/templates.js'],
            //     tasks: ['requirejs', 'copy']
            // },
            thirdchannel_test: {
                files: ['js/apps/thirdchannel/**/*.js', 'js/tests/thirdchannel/**/*.js'],
                tasks: ['karma:thirdchannel']
            },
            territory_test: {
                files: ['js/apps/territory/**/*.js', 'js/tests/territory/**/*.js'],
                tasks: ['karma:territory']
            }
        }
    });
    // rather than list every dependency line by line, just load 'em all
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.registerTask('default', ['concurrent:dev']);
    grunt.registerTask('test', ['karma:thirdchannel', 'karma:territory']);

    grunt.registerTask('build-dev', ['clean', 'sass','handlebars','test', 'requirejs','copy']);
    grunt.registerTask('build-beta', ['clean', 'sass','handlebars', 'test', 'requirejs','copy', 'aws_s3:staging', 'invalidate_cloudfront:staging']);
    grunt.registerTask('build-prod', ['clean', 'sass','handlebars','test', 'requirejs','copy', 'aws_s3:production', 'invalidate_cloudfront:production']);

};
