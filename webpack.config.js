const path = require('path');

module.exports = {
  entry: './assets/js/script.js', // Entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Output bundle file name
  },
  module: {
    rules: [
      // Rule to handle HTML files
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      // Rule to handle static assets
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
};