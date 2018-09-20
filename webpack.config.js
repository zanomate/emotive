/* global __dirname, require, module*/

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'emotive.js',
        libraryTarget: 'umd',
        library: 'emotive',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts']
    },
    plugins: [
        new CopyPlugin([
            './build'
        ])
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    }
};
