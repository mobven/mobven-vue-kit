const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "../dist/"),
    compress: true,
    port: 8002,
    writeToDisk: true,
  },
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [
          { loader: "vue-style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    // make sure to include the plugin!
    new VueLoaderPlugin(),
  ],
  output: {
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "",
    filename: "main.js",
    libraryTarget: "umd",
  },
};
