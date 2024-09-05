// webpack.prod.js - 생산 환경에 맞는 설정으로 코드 압축 및 최적화 포함

const { merge } = require("webpack-merge"); // webpack-merge를 사용하여 공통 설정과 병합
const common = require("./webpack.common.js"); // 공통 설정 파일 불러오기
const TerserPlugin = require("terser-webpack-plugin"); // TerserPlugin을 사용하여 코드 압축

module.exports = merge(common, {
  mode: "production", // 배포 모드 설정
  devtool: "hidden-source-map", // 소스맵 설정 (소스맵을 숨김)
  optimization: {
    minimize: true, // 코드 압축 활성화
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 콘솔 로그 제거
          },
        },
      }),
    ],
    splitChunks: {
      chunks: "all", // 코드 스플리팅 설정
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
});