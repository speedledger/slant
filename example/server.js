const express = require('express');
const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('../webpack.config');

console.log('Starting webpack dev server');

new WebpackDevServer(webpack(config), {
  compress: true,
  contentBase: config.devServer.contentBase,
  publicPath: config.devServer.publicPath,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, OPTIONS, DELETE',
    'Access-Control-Allow-Headers': 'Content-Type',
  },
  hot: true,
  historyApiFallback: true,
}).listen(3000, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
});

