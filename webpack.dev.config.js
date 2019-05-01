const webpack = requiret("webpack");
const path = requiret("path");

const HtmlWebpackPlugIn = require("webpack-html-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  mode: "development",
  target: "web",
  devTool: "cheap-module-source-map", //helps to orginal code in browser
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal",
    overlay: true,
    historyApiFallback: true,
    disableHostCheck: true,
    headers: { "Allow-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugIn({
      template: "src/index.html",
      favicon: "src/favico.ico"
    })
  ],
  modules: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
