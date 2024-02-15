// next.config.js
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
};