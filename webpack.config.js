const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const path = require('path');

module.exports = {
  entry: {
    "rx-flicker/index": "./src/rx-flicker/index.js",
    "small-bodies/index": "./src/rx-flicker/index.js"
  },
  output: {
    path: path.join(__dirname,'apps'),
    filename: "[name].js"
  },
  plugins: [new UglifyJSPlugin()]
};
