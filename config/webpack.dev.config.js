const webpack = require('webpack');
const merge = require('webpack-merge')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const PROJECT = require('./project.config');
const baseWebpackConfig = require('./webpack.base.config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
  /**
   * 开发工具 (Devtool)
   * @see https://webpack.js.org/configuration/devtool/
   * @description 此选项控制是否生成，以及如何生成 Source Map
   */
  devtool: '#cheap-module-inline-source-map',

  /**
   * 插件 (Plugins)
   * @see https://webpack.js.org/configuration/plugins/
   */
  plugins: [
    // 用于模块热替换，适用于开发环境
    // https://webpack.js.org/guides/hmr-react/
    new webpack.HotModuleReplacementPlugin(),

    // 用于编译时可以配置的全局常量
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(PROJECT.ENV_DEV) }
    }),

    // 第三方插件，优化提示效果
    // https://github.com/geowarin/friendly-errors-webpack-plugin
    new FriendlyErrorsPlugin(),

    // https://github.com/th0r/webpack-bundle-analyzer
    new BundleAnalyzerPlugin()
  ],

  /**
   * 开发服务器 (DevServer)
   * @see 也可以使用Express https://webpack.js.org/configuration/dev-server/
   */
  devServer: {
    // 启用gzip压缩
    compress: true,
    // 告诉服务器从哪里提供内容
    contentBase: PROJECT.PATH_SRC,
    // 当使用HTML5 History API，任意的 404 响应可以提供为 index.html 页面
    historyApiFallback: true,
    // 构建消息将会出现在浏览器控制台
    inline: true,
    // 告诉服务器监视那些通过 devServer.contentBase 选项提供的文件。文件改动将触发整个页面重新加载
    watchContentBase: true,
    // 与监视文件相关的控制选项
    watchOptions: {
      ignored: /node_modules/,
    },
    // 启用 webpack 的模块热替换特性
    hot: true,
    // 指定使用一个 host
    host: PROJECT.SERVER_HOST,
    // 指定要监听请求的端口号
    port: PROJECT.SERVER_PORT,
    // 遮罩层提示错误
    overlay: true,
    quiet: true
  }
})
