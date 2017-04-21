const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')

const PROJECT = require('./project.config');
const baseWebpackConfig = require('./webpack.base.config');

module.exports = merge(baseWebpackConfig, {
  /**
   * 开发工具 (Devtool)
   * @see https://webpack.js.org/configuration/devtool/
   * @description 此选项控制是否生成，以及如何生成 Source Map
   */
  devtool: PROJECT.COMPLIE_PROD_SOURCEMAP ? '#source-map' : false,

  /**
   * 输出 (Output)
   * @see https://webpack.js.org/configuration/output/
   */
  output: {
    path: PROJECT.PATH_DIST,
    filename: '[name].[hash].bundle.js',
    sourceMapFilename: '[name].[hash].bundle.map',
    chunkFilename: '[name].[hash].chunk.js'
  },

  /**
   * 统计(Stats)
   * @see https://webpack.js.org/configuration/stats/
   * @description 准确地控制显示哪些包的信息
   */
  stats: 'errors-only', // 只在发生错误时输出
  
  /**
   * 插件 (Plugins)
   * @see https://webpack.js.org/configuration/plugins/
   */
  plugins: [
    // 用于编译时可以配置的全局常量
    // https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(PROJECT.ENV_PROD) }
    }),

    // 使用 UglifyJS 压缩js代码
    // https://webpack.js.org/plugins/uglifyjs-webpack-plugin/
    // http://lisperator.net/uglifyjs/
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false,
      },
      mangle: {
        screw_ie8: true,
      },
      output: {
        comments: false,
        screw_ie8: true,
      },
      sourceMap: true
    }),

    // 用于建立一个独立文件(又称作 chunk)的功能，这个文件包括多个入口 chunk 的公共模块
    // https://webpack.js.org/plugins/commons-chunk-plugin/
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      // 在传入  公共chunk(commons chunk) 之前所需要包含的最少数量的 chunks
      // 数量必须大于等于2，或者少于等于 chunks的数量
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      // 通过 chunk name 去选择 chunks 的来源。chunk 必须是  公共chunk 的子模块。
      // 如果被忽略，所有的，所有的 入口chunk (entry chunk) 都会被选择。
      chunks: ['vendor']
    })
  ],
})
