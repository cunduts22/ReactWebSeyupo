const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");
const webpack = require("webpack");
// const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware')
// const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const scssDev = [
    {
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "resolve-url-loader"
    }, {
        loader: "sass-loader?sourceMap" // compiles Sass to CSS
    }
]

module.exports = merge(common, {
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: scssDev
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 9001,
        stats: "errors-only",
        open: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});