const webpack           = require('webpack');
const path              = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractHTML       = new ExtractTextPlugin('[name].html');
const extractPostCSS    = new ExtractTextPlugin('[name].css');

const htmlSetting = {
  entry: {
    index: ['./src/index.pug'],
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
          outputPath: './images',
        },
      },
    ],
  },
  plugins: [extractHTML],
};

const cssSetting = {
  entry: {
    main: ['./src/stylesheets/main.postcss'],
  },
  output: {
    path: path.resolve('./public/stylesheets'),
    filename: '[name].css',
  },
  resolve: {
    alias: {
      '../fonts': path.resolve('./node_modules/bootstrap/dist/fonts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(css|postcss)$/,
        exclude: /(node_modules)/,
        use: extractPostCSS.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'postcss-loader'],
        }),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        loader: 'file-loader',
        options: {
          name: '[name]_[hash].[ext]',
          outputPath: './assets/',
        },
      },
    ],
  },
  plugins: [extractPostCSS],
};

const jsSetting = {
  entry :{
    main: ['./src/javascripts/main.js'],
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
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],
};

module.exports = [
  htmlSetting, cssSetting, jsSetting,
];
