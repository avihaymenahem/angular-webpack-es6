"use strict";

// Reference: http://karma-runner.github.io/0.12/config/configuration-file.html
module.exports = function karmaConfig (config) {
    const TEST_PORT = 8889;

    config.set({
        frameworks: [ 'jasmine' ],
        reporters: [ 'progress' ,'coverage' ],
        files: [
            // Grab all files in the app folder that contain .test.
            'webpack.tests.js'
        ],

        preprocessors: {
            // Reference: http://webpack.github.io/docs/testing.html
            // Reference: https://github.com/webpack/karma-webpack
            // Convert files with webpack and load sourcemaps
            'tests.webpack.js': ['webpack', 'sourcemap']
        },

        browsers: [
            // Run tests using PhantomJS2, Firefox And Chrome
            //'PhantomJS2'
            'Chrome'
        ],

        singleRun: false,

        // Configure code coverage reporter
        coverageReporter: {
            dir: 'coverage/',
            reporters : [
                {type:'text-summary'},
                {type:'html'}
            ]
        },

        webpack: require('./webpack.config'),
        port: TEST_PORT
    });
};