const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development", 
  devServer: {
    port: 3000, 
    hot: true, 
    historyApiFallback: true, 
  },
  plugins: [
    new RefreshWebpackPlugin(), 
  ],
});
