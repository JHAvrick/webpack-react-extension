var path = require('path');

var APP_DIR = path.resolve(__dirname, '..', 'src', 'popup');
var BUILD_DIR = path.resolve(__dirname, '..', 'build');

module.exports = {
    name: "popup",
    entry: path.resolve(APP_DIR, 'popup.jsx'),
    module: {
        rules: [{ test: /\.jsx?/,use: "babel-loader" }],
    },
    output: {
            path: BUILD_DIR,
            filename: 'popup_bundle.js',
    },
    resolve: {
        alias: {
            //components: path.resolve(__dirname, 'app/components/base'),
            //pages: path.resolve(__dirname, 'app/components/page'),
        }
    }
};