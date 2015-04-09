/*global module, require */
/*jslint regexp: true */

/**
 * Grunt Configurations
 * ====================
 *
 * Seperate tasks and configurations are declared in '/tasks'.
 *
 * Link: https://github.com/firstandthird/load-grunt-config
 */

module.exports = function (grunt) {
    "use strict";

    /**
     *
     * Wrapper to perform an operation on each matching path item. Could be a file or a directory.
     * Each item will be passed to a callback - fn - which will receive the following arguments:
     * - the name of the item (e.g. the last position in the file path)
     * - the full path
     * - the tokenized breakup of the path
     *
     */
    grunt.util.operateOnPaths = function(grunt, path, fn) {
        var appPaths = grunt.file.expand(path),
            tokens,
            name,
            i = appPaths.length;

        while (i--) {
            tokens = appPaths[i].split('/');
            // callback that fn utilizes
            // name, path, tokens
            fn(tokens[tokens.length - 1], appPaths[i], tokens);
        }
    };

    grunt.util.buildKarmaOptions = function(serviceName, additionalPaths, additionalExcludes) {
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

        if(additionalPaths) {
            files = files.concat(additionalPaths);
        }
        if(additionalExcludes) {
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
    };


    grunt.util.taskPaths = function(grunt) {
        var basePath = __dirname +  '/tasks/',
            paths = [basePath],
            apps = grunt.option("apps");

        if (apps !== undefined) {
            paths.push(basePath + 'shared');
            apps = apps.split(',');
            for (var index in apps) {
                paths.push(basePath + apps[index]);
            }
        } else {
            apps = "all";
            paths = paths.concat(grunt.file.expand(basePath + '*/'));
        }

        console.log("Building for apps: " + apps);

        return paths;
    };

    // load task and configurations
    require('load-grunt-config')(grunt, {
        configPath: grunt.util.taskPaths(grunt),

        //allows to manipulate the config object before it gets merged with the data object
        preMerge: function(config, data) {
            var _ = require('lodash'),
                awsTasks = ['aws_s3', 'invalidate_cloudfront'],
                arrayMerge = function (a, b) {
                    if (_.isArray(a)) {
                        return a.concat(b);
                    }
                };

            // Many plugins doesn't allows the level of subtasks we need, so we need to try and combine all of the subtasks in one
            for (var index in awsTasks) {
                var task = {},
                    awsTask = awsTasks[index];

                for (var key in config[awsTask]) {
                    _.merge(task, config[awsTask][key], arrayMerge);
                }

                config[awsTask] = task;
            }
        }
    });
};