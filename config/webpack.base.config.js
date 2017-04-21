const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PROJECT = require('./project.config');

module.exports = {
  /**
   * 入口 (Entry) 
   * @see https://webpack.js.org/configuration/entry-context/
   */
  entry: {
    app: './example/index.tsx',
    vendor: PROJECT.COMPLIE_VENDORS,
  },

  /**
   * 输出 (Output) 
   * @see https://webpack.js.org/configuration/output/
   */
  output: {
    // output 目录对应一个绝对路径。
    path: PROJECT.PATH_DIST,
    // 此选项决定了每个输出 bundle 的名称。这些 bundle 将写入到 output.path 选项指定的目录下。
    filename: '[name].js',
    // 此选项会向硬盘写入一个输出文件，只在 devtool 启用了 SourceMap 选项时才使用。
    sourceMapFilename: '[name].map',
    chunkFilename: '[name].chunk.js'
  },

  /**
   * 解析 (Resolve) 
   * @see https://webpack.js.org/configuration/resolve/
   */
  resolve: {
    // 自动解析确定的扩展，能够使用户在引入模块时不带扩展
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },

  /**
   * 模块 (Module)
   * @see https://webpack.js.org/configuration/module/
   */
  module: {
    // 创建模块时，匹配请求的规则数组。这些规则能够修改模块的创建方式。这些规则能够对模块(module)应用加载器(loader)，或者修改解析器(parser)。
    rules: [
      {
        test: /\.ts[x]?$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        loader: 'babel-loader!awesome-typescript-loader',
      },
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize&sourceMap!postcss-loader!sass-loader?sourceMap'
        })
      },
      {
        test: /\.css$/,
        // exclude: /(node_modules)/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?minimize&sourceMap!postcss-loader',
        }),
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'img/[name].[hash].[ext]'
        }
      }
    ],
  },

  /**
   * 插件 (Plugins)
   * @see https://webpack.js.org/configuration/plugins/
   */
   plugins: [
     // 用于简化 HTML 文件（index.html）的创建，提供访问 bundle 的服务。
    // https://webpack.js.org/plugins/html-webpack-plugin/
    new HtmlWebpackPlugin({
      inject: true,
      template: PROJECT.PATH_HTML,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
      chunksSortMode: 'dependency'
    }),

    // 它会将所有的 入口chunk (entry chunks) 中的 require("style.css") 移动到单独的 css 文件
    // https://webpack.js.org/plugins/extract-text-webpack-plugin/
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
   ]
}