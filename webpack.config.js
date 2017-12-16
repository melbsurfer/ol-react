const webpack = require('webpack');

module.exports = {
  entry: './App.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true, // needed for react-router https://www.youtube.com/watch?v=_Fzl0Cim6F8&t=41s ~16:01
  },
};
