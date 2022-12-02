const merge = require('webpack-merge')
const common = require('./webpack.common')

const dev = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    open: true
  }
}

module.exports = merge(common, dev)
