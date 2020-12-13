const path = require("path")

module.exports = {
  mode: process.env.NODE_ENV,
  entry: "./src/main.tsx",
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|woff|woff2)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"],
            plugins: [["styled-components", { ssr: false, displayName: true }]],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    compress: true,
    port: 3000,
    publicPath: "/dist/",
  },
}
