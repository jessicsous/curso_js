const path = require('path'); // CommonJS

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'js/bundle.js',
  },
  devServer: {
    static: {
        directory: path.join(__dirname, 'src'),
    },
    compress: true,
    port: 9000,
  },
};