// [ 개발 환경에 맞는 설정으로 소스맵과 핫 리로딩 설정 ]
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = merge(common, {
  mode: "development", // 개발 모드 설정
  devtool: "inline-source-map", // 소스맵 설정
  devServer: {
    port: 3000, // 개발 서버 포트
    hot: true, // 핫 모듈 교체 활성화
    historyApiFallback: true, // HTML5 History API를 사용하는 SPA 지원
  },
  plugins: [
    new RefreshWebpackPlugin(), // React Refresh 플러그인 활성화
  ],
});
