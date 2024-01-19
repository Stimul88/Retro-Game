const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.png/,
        type: 'asset/resource'
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCSSExtractPlugin()
  ],
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    port: 9000,
  },
}


// const path = require('path');
// const HtmlWebPackPlugin = require('html-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//
// module.exports = {
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader',
//         },
//       },
//       {
//         test: /\.html$/,
//         use: [
//           {
//             loader: 'html-loader',
//           },
//         ],
//       },
//       {
//         test: /\.css$/,
//         use: [
//           MiniCssExtractPlugin.loader, 'css-loader',
//         ],
//       },
//       {
//         test: /\.(png|jpg|gif)$/i,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 8192,
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: './src/index.html',
//       filename: './index.html',
//     }),
//     new MiniCssExtractPlugin({
//       filename: '[name].css',
//       chunkFilename: '[id].css',
//     }),
//   ],
// };
