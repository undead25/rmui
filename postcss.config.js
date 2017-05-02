const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem')
module.exports = {
  plugins: [
    autoprefixer({
      browsers: ['last 2 versions','iOS >= 7', 'Android >= 4']
    }),
    pxtorem({
      rootValue: 100,
      propWhiteList: []
    })
  ]
}