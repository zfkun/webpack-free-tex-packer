const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        allowedHosts: 'auto',
        hot: true,
        host: '0.0.0.0',
    },
});
