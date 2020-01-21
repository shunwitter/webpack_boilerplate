const path = require('path');

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
};
