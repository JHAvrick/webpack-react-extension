var path = require('path');

var APP_DIR = path.resolve(__dirname, '..', 'src', 'content_script');
var BUILD_DIR = path.resolve(__dirname, '..', 'build');

module.exports = {
    name: "content_script",
    entry: path.resolve(APP_DIR, 'content_script.js'),
    devtool: 'cheap-module-source-map',
    output: {
            path: BUILD_DIR,
            filename: 'content_script.js',
    },
    resolve: {
        alias: {
            //components: path.resolve(__dirname, 'app/components/base'),
            //pages: path.resolve(__dirname, 'app/components/page'),
        }
    }
};