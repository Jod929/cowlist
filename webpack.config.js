const path = require('path');
let webpack = require("webpack")
const HtmlWebpackPlugin = require('html-webpack-plugin');

var SRC_DIR = path.join(__dirname, "/src");

// "./src/index.js"

module.exports = [
  {
    entry: `${SRC_DIR}/index.jsx`,
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
      ]
    },
    plugins: [new HtmlWebpackPlugin({title: 'cowlist', template: 'template.html'})],
    resolve: { extensions: ["*", ".js", ".jsx"] },
    output: {
      path: path.join(__dirname, "/dist"),
      publicPath: "/",
      filename: "bundle.js"
    },
  },

];


