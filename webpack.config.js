const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
      contentBase: './dist',
      port: 3000
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
