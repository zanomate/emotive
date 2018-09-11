/* global __dirname, require, module*/

// const webpack = require('webpack');
const path = require('path');
const pkg = require('./package.json');

let libraryName = pkg.name;

const config = {
    mode: 'production',
    entry:  __dirname + '/src/index.js',
    devtool: 'source-map',
    output: {
        path: __dirname + '/lib',
        filename: libraryName + '.js',
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: [path.resolve('./node_modules'), path.resolve('./src')],
        extensions: ['.js']
    }
};

module.exports = config;
