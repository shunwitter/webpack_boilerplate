module.exports = {
  plugins: [
    require('postcss-smart-import')({ /* ...options */ }),
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ browsers: ['IE 10', 'IE 11', 'last 4 versions'] }),
  ],
};
