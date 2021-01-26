const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

const HappyPack = require('happypack')
const os = require('os')
const happyThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length > 4 ? 4 : os.cpus().length
});

module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, "../dist/"),
    compress: true,
    port: 8002,
    writeToDisk: true,
  },
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
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
  output: {
    path: path.resolve(__dirname, "../dist/"),
    publicPath: "",
    filename: "main.js",
    libraryTarget: "umd",
  },
  plugins: [
    new HappyPack({
      id: 'happy-js',
      loaders: ['babel-loader'],
      threadPool: happyThreadPool,
      verbose: true
    }),
    new HappyPack({
      id: 'happy-css',
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      threadPool: happyThreadPool,
      verbose: true
    })
  ]
};
