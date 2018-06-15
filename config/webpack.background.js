var path = require('path');

var APP_DIR = path.resolve(__dirname, '..', 'src', 'background');
var BUILD_DIR = path.resolve(__dirname, '..', 'build');

module.exports = {
    name: "background_script",
    
    entry: path.resolve(APP_DIR, 'background.js'),
    
    output: {
            path: BUILD_DIR,
            filename: 'background.js',
    },

    resolve: {
        alias: {
            //components: path.resolve(__dirname, 'app/components/base'),
            //pages: path.resolve(__dirname, 'app/components/page'),
        }
    }
};