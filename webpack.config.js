const path = require('path')

module.exports = {
  target: 'electron',
  node: {
    fs: 'empty'
  },
  entry: {
    'main/index': path.join(__dirname, 'src/main/index.js'),
    'renderer/app': path.join(__dirname, 'src/renderer/app.js')
  },
  output: {
    filename: 'dist/[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
