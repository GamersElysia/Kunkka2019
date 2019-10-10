var path = require('path');

module.exports = {
  output: {
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 8080
  }
};