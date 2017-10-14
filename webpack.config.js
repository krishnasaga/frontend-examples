const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: './rx-flicker/index.js'
    },
    plugins: [
        new UglifyJSPlugin()
    ]
};
