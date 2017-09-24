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
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: {
            plugins: [
              require('postcss-cssnext')()
            ]
          }
        }
      },
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.woff', 'woff2', '.ttf', '.eot', '.svg']
  },
  devtool: 'inline-source-map'
}
