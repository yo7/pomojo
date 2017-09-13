const path = require('path')

module.exports = {
  target: 'electron',
  node: {
    __dirname: false,
    __filename: false
  },
  entry: {
    'main/index': path.join(__dirname, 'src/main/index.js'),
    'renderer/index': path.join(__dirname, 'src/renderer/index.js')
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
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  }
}
