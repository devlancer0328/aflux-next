const path = require('path');

module.exports = {
  // other webpack configuration...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // Add the output property to enable static HTML export
  // Learn more: https://nextjs.org/docs/advanced-features/static-html-export
  output: {
    // Set this to true if you're deploying to a subdirectory
    // basePath: '/subdirectory',
    // Optionally configure other options such as trailingSlash
    // trailingSlash: true,
  },
};
