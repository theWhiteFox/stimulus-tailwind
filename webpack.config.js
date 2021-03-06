const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
  },

  mode: "production",
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              plugins: [require("@babel/plugin-proposal-class-properties")],
            },
          },
        ],
      },
    ],
  },
};
