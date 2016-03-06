"use strict";

let webpack = require('webpack'),
    autoprefixer = require('autoprefixer'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function makeWebpackConfig () {
    const BASE_FOLDER = './src',
        ASSETS_PATH = 'assets',
        ENV = process.env.npm_lifecycle_event,
        ENV_PORT = 8888,
        BASE_FILE_NAME = '[name].[hash].[ext]',
        IS_TEST_ENV = ENV === 'test',
        IS_BUILD_ENV = ENV === 'build',
        JS_FILE_PATH =  IS_BUILD_ENV ? `${ASSETS_PATH}/js/${BASE_FILE_NAME}` : '[name].bundle.js';

    let config = {
        entry : IS_TEST_ENV ? {} : { app: './src/app/app.js' }
    };

    config.output = IS_TEST_ENV ? {} : {
        path:           `${__dirname}/dist`,
        publicPath:     IS_BUILD_ENV ? '/' : 'http://localhost:' + ENV_PORT + '/',
        filename:       JS_FILE_PATH,
        chunkFilename:  JS_FILE_PATH
    };

    switch(ENV) {
        case 'test':
            config.devtool = 'inline-source-map';
            break;

        case 'build':
            config.devtool = 'source-map';
            break;

        default:
            config.devtool = 'eval-source-map';
            break;
    }

    config.module = {
        preLoaders: [],
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: IS_TEST_ENV ? 'null' : ExtractTextPlugin.extract('style', 'css?sourceMap!postcss')
        }, {
            test: /\.(png|jpg|jpeg|gif|svg)$/,
            loader: 'file',
            query: { name: `${ASSETS_PATH}/images/${BASE_FILE_NAME}` }
        }, {
            test: /\.(woff|woff2|ttf|eot)/,
            loader: 'file',
            query: { name:`${ASSETS_PATH}/fonts/${BASE_FILE_NAME}` }
        }, {
            test: /\.(json)/,
            loader: 'raw',
            query: { name: `${ASSETS_PATH}/data/${BASE_FILE_NAME}` }
        }, {
            test: /\.html$/,
            loader: 'raw'
        },{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    };

    if (IS_TEST_ENV) {
        config.module.preLoaders.push({
            test: /\.js$/,
            exclude: [
                /node_modules/,
                /\.spec\.js$/
            ],
            loader: 'isparta-instrumenter'
        })
    }

    config.postcss = [
        autoprefixer({
            browsers: ['last 2 version']
        })
    ];

    config.plugins = [];

    if (!IS_TEST_ENV) {
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: `${BASE_FOLDER}/index.html`,
                inject: 'body'
            }),

            new ExtractTextPlugin(`${ASSETS_PATH}/css/${BASE_FILE_NAME}`, {disable: !IS_BUILD_ENV})
        )
    }

    if (IS_BUILD_ENV) {
        config.plugins.push(
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.UglifyJsPlugin()
        )
    }

    config.devServer = {
        port: ENV_PORT,
        contentBase: './src',
        stats: {
            open: true,
            https: true,
            colors: true
        }
    };

    return config;
}();