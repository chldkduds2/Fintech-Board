// [ 개발과 생산 환경에서 공통으로 사용하는 설정 포함 ]
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  entry: "./src/index.tsx", //엔트리 포인트 설정
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        loader: "esbuild-loader", // JavaScript, TypeScript 파일 처리
        options: {
          target: "esnext",
        },
      },
      {
        test: /\.(png|jpg|gif|mp4|jpeg|ico)$/, // 이미지 및 미디어 파일 처리
        type: "asset",
      },
      {
        test: /\.svg$/, // SVG 파일을 React 컴포넌트로 변환
        use: ["@svgr/webpack"],
      },
      {
        test: /\.css$/, // CSS 파일 처리
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "esbuild-loader",
            options: {
              loader: "css",
              minify: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // HTML 템플릿 파일
      filename: "index.html",
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env), // 환경 변수를 전역에서 사용 가능하도록 설정
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"], // 파일 확장자 설정
    alias: {
      "@": path.resolve(__dirname, "./src"), // '@'를 './src'로 매핑
    },
  },
  output: {
    filename: "bundle.js", // 번들 파일 이름
    path: path.resolve(__dirname, "dist"), // 출력 경로
  },
};
