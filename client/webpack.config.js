module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,  // regex to select only .css files
        loader: 'style-loader!css-loader!sass-loader'     // the sass-loader converts the sass into css, the css-loader puts that css into the javascript, the style-loader then puts the javascript into the DOM.
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modulesDirectories: [
      'node_modules'
    ]   
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
