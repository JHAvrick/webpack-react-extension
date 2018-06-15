var webpack = require('webpack');

/*
 * Chrome extensions are made up of several discrete pages and scripts which 
 * must be bundled seperately. All the various configs are imported below.
 * If more content_scripts are needed, each script should be given it's own
 * config if necessary (e.g. if it needs to run on some pages but not others).
 */
module.exports = [
    require('./config/webpack.background.js'),
    require('./config/webpack.content_script.js'),
    require('./config/webpack.popup.js'),
    require('./config/webpack.options.js')
];