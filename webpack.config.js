const webpack = require('webpack');

module.exports = {
  entry: './App.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'}
        ]
      },
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ]
};
