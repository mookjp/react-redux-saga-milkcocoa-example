const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  // http://babeljs.io/docs/usage/polyfill/
  entry: ['babel-polyfill', './index.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
  },
  externals: {
    // 'milkcocoa' will be resolved by object MilkCococa in global set by script tag
    // http://webpack.github.io/docs/library-and-externals.html
    milkcocoa: 'MilkCocoa',
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png)$/,
        loader: 'file',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff',
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream',
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file',
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml',
      },
    ],
  },
  devServer: {
    contentBase: './public',
    inline: true,
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  devtool: 'source-map',
  resolveLoader: {
    modulesDirectories: [
      path.join(__dirname, 'node_modules'),
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      MILKCOCOA_APPID: JSON.stringify(process.env.MILKCOCOA_APPID),
    }),
  ],
};
