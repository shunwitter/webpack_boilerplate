const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    main: './src/stylesheets/main.scss',
  },
  output: {
    path: path.resolve('./public/stylesheets'),
    filename: '[name].css',
  },
  module: {
    rules: [
      {
        test: /\.(css|scss|sass)$/,
        exclude: /(node_modules)/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: '../images',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: '../fonts',
        },
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ],
};
