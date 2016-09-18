
module.exports = {
  //entry: './src/async',
  //entry: './src/middlew',
  entry: './src/reducer',
  // output: {
  // path: 
  // // filename: 'bundle.js'
  // },
  devServer: {
    inline: true,
    publicPath: '/',
    //filename: 'bundle.js',
    //contentBase: '',
    port: 8087
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        // //  plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
          plugins: ['transform-object-rest-spread']
        }
      }
    ]
  }
}
