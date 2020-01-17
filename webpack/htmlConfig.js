const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractHTML       = new ExtractTextPlugin('[name].html');

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
        use: extractHTML.extract({
          use: ['html-loader', 'pug-html-loader'],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: './images',
        },
      },
    ],
  },
  plugins: [extractHTML],
};
