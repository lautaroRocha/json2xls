const path = require("path")
const nodeExternals = require("webpack-node-externals")
const Dotenv = require("dotenv-webpack")

const env = process.env.NODE_ENV || "development"

const serverConfig = {
  mode: env,
  entry: "./src/server/index.ts",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        options: {
          configFile: "tsconfig.server.json"
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts"]
  },
  output: {
    filename: "server.cjs",
    path: path.resolve(__dirname, "dist/server")
  },
  target: "node",
  node: {
    __dirname: false
  },
  externals: [nodeExternals()]
}

module.exports = serverConfig
