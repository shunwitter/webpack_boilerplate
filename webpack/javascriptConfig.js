const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry :{
    main: './src/assets/javascripts/main.js',
  },
  output: {
    path: path.resolve('./public/assets/javascripts'),
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
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-object-rest-spread'],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
};
