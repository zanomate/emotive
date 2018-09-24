/* global __dirname, require, module*/

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'emotive.js',
        libraryTarget: 'umd',
        library: 'emotive',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            constants: path.join(__dirname, 'src/constants'),
            core: path.join(__dirname, 'src/core'),
            datatypes: path.join(__dirname, 'src/datatypes'),
            methods: path.join(__dirname, 'src/methods'),
            properties: path.join(__dirname, 'src/properties')
        }
    },
    plugins: [
        new CopyPlugin([
            './build',
            './README.md'
        ])
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    }
};
