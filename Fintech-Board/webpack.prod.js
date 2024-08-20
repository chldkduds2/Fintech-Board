// [ 생산 환경에 맞는 설정으로 코드 압축 및 최적화 포함 ]
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const { ESBuildMinifyPlugin } = require("esbuild-loader");

module.exports = merge(common, {
  mode: "production", // 생산 모드 설정
  devtool: "hidden-source-map", // 소스맵 설정
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        target: "es2015", // ES2015로 타겟 설정
        css: true, // CSS도 압축
      }),
    ],
  },
});
