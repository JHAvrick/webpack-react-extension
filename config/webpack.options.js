var path = require('path');

var APP_DIR = path.resolve(__dirname, '..', 'src', 'options');
var BUILD_DIR = path.resolve(__dirname, '..', 'build');

module.exports = {
    name: "popup",
    entry: path.resolve(APP_DIR, 'options.jsx'),
    module: {
        rules: [{ test: /\.jsx?/,use: "babel-loader" }],
    },
    output: {
            path: BUILD_DIR,
            filename: 'options_bundle.js',
    },
    resolve: {
        alias: {
            //components: path.resolve(__dirname, 'app/components/base'),
            //pages: path.resolve(__dirname, 'app/components/page'),
        }
    }
};
