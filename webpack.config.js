const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = (paths) => (
  paths.map(path => (
    new HtmlWebpackPlugin({
      template: `./src/pages/${path}.pug`,
      filename: `${path}.html`,
      minify: false,
    })
  ))
);

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'assets/javascripts/[name]-[hash].js',
  },
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'html-loader',
          },
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
      {
        test: /\.(css|scss|sass)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: './assets/images',
               // Hack
              esModule: false,
              publicPath: (url, resourcePath, context) => {
                // https://webpack.js.org/loaders/file-loader/#publicpath
                // url:           hashed file name
                // resourcePath:  absolute path of original file
                // context:       webpack directory
                if (/\/images\//.test(resourcePath)) {
                  return `/assets/images/${url}`;
                }
                if (/\/fonts\//.test(resourcePath)) {
                  return `/assets/fonts/${url}`;
                }
                return `/assets/${url}`;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/stylesheets/[name]-[hash].css',
    }),
    ...htmlPlugin([
      'index',
      'posts/1',
    ]),
  ],
}
