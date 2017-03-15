module.exports = {
  context: __dirname + "/src",
  entry: './index.js',

  output: {
    path: __dirname + "/site",
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
