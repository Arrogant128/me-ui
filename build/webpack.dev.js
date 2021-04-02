/*
 * @Author: yushijun
 * @Date: 2021-04-01 17:14:08
 * @LastEditors: yushijun
 * @LastEditTime: 2021-04-02 13:51:53
 */
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const config = require('./webpack.config.js')
module.exports = {
  mode: 'development',
  entry:  config.componentsEntry,
  output: {
    path: path.join(__dirname, '../lib'),
    filename: '[name].js',
    libraryExport: 'default',
    library: 'IDSSUI',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js','.vue'],
  },
  target: 'es5',
  module: {
    rules: [
      // 配置js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:[
              '@babel/preset-env'
            ]
          }
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader', // 处理以.vue结尾的文件
        options: {
          compilerOptions: {
            preserveWhitespace: false
          }
        }
      },
      {
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader']
      },
      // less 提取
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader,'css-loader','less-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'componentsStyle/[name].css',
    })
  ]
}