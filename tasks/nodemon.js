/**
 * nodemon
 * ==========
 *
 */

'use strict';

module.exports = function(grunt) {
    return {
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
                callback: function (nodemon) {
                    nodemon.on('log', function (event) {
                        console.log(event.colour);
                    });
                }
            }
        }
    };
};