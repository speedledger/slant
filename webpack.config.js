const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const shared = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader', options: { url: false } },
          { loader: 'less-loader', options: { url: false } },
        ],
      },
    ],
  },
};

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    'index.jsx',
  ],

  output: {
    path: `${__dirname}/build/`,
    filename: '[name]-[hash].js',
    publicPath: 'http://localhost:3000/',
  },

  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'build'),
    publicPath: 'http://localhost:3000/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: 'example/index.html',
    }),
  ],

  module: shared.module,

  resolve: {
    extensions: ['.js', '.jsx' ],
    modules: [
      path.resolve(__dirname, 'example'),
      'node_modules',
    ],
  },
};

