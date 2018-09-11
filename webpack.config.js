/* global __dirname, module*/
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        library: 'emotive',
        libraryTarget: 'umd',
        path: path.resolve(__dirname, 'lib'),
        filename: 'emotive.js',
        publicPath: '/lib'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    }
};
