const path = require('path');
const ip = require('ip');

module.exports = {
  // 环境配置
  ENV_DEV: 'development',
  ENV_PROD: 'production',
  ENV_TEST: 'test',

  // 目录配置
  PATH_BASE: path.resolve(__dirname, '..'),
  PATH_SRC: path.resolve(__dirname, '../example'),
  PATH_DIST: path.resolve(__dirname, '../dist'),
  PATH_HTML: path.resolve(__dirname, '../example/index.html'),

  // 开发服务器配置
  SERVER_HOST: ip.address() || 'localhost',
  SERVER_PORT: process.env.PORT || 3003,

  // 编译配置
  COMPLIE_VENDORS: [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'classnames'
  ],
  // 是否启用生产sourcemap
  COMPLIE_PROD_SOURCEMAP: true,
}
