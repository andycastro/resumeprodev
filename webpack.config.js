const HtmlWebPackPlugin = require('html-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
entry: "./src/App.js",
output: {
  path: path.resolve(__dirname, 'dist'),
  filename: 'bundle.js',
},
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }
  ]
},
plugins: [
  new HtmlWebPackPlugin({ 
    template: "./src/index.html" 
  }),
  new CopyWebpackPlugin([{
    from: 'src/img/**',
    to: path.resolve(__dirname, 'dist')
  }]),
  new ImageminPlugin()
  ]
};