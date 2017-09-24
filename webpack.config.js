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
        loader: 'vue-loader'
      },
      {
        test: /.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file-loader?name=dist/fonts/[name].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.woff', 'woff2', '.ttf', '.eot', '.svg']
  },
  devtool: 'inline-source-map'
}
