/* global __dirname, require, module*/

const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './build/emotive.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'emotive.js',
        libraryTarget: 'umd',
        library: 'emotive',
        umdNamedDefine: true
    },
    plugins: [
        new CopyPlugin([
            './build/package.json',
            './README.md'
        ])
    ],
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader',
            options: {
                configFile: path.resolve(__dirname, './build/tsconfig.json')
            }
        }]
    }
};
