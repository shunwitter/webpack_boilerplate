const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.pug',
  },
  output: {
    path: path.resolve('./public'),
    filename: '[name].html',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          use: [
            'html-loader?minimize=false',
            'pug-html-loader?pretty=true'
          ],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: './assets/images',
          // Hack:
          // https://stackoverflow.com/questions/59070216/webpack-file-loader-outputs-object-module
          esModule: false,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ExtractTextPlugin('[name].html'),
  ],
};
