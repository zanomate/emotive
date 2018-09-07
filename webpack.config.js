const webpack = require('webpack');
const pkg = require('./package.json');

module.exports = {
  mode: 'production',
  context: __dirname,
  entry:  './src/index.js',
  output: {
    path: __dirname,
    filename: pkg.name + '.js',
    library: pkg.name
  },
  module: {
    rules: [
      {
        test: /(\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  }
};
