
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractHTML       = new ExtractTextPlugin('[name].html');
const extractPostCSS    = new ExtractTextPlugin('[name].css');

module.exports = [{
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
          outputPath: './public/images',
        },
      },
    ],
  },
  plugins: [extractHTML],
}, {
  entry: {
    main: './src/stylesheets/main.postcss',
  },
  output: {
    path: path.resolve('./public/stylesheets'),
    filename: '[name].css',
  },
  module: {
    rules: [
      {
        test: /\.postcss$/,
        exclude: /(node_modules)/,
        use: extractPostCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
    ],
  },
  plugins: [extractPostCSS],
}, {
  entry :{
    main: './src/javascripts/main.js',
  },
  output: {
    path: path.resolve('./public/javascripts'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'es2015'],
            plugins: [
              'transform-object-rest-spread',
            ],
          },
        },
      },
    ],
  },
}];
