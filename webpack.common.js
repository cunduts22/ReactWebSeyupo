"use-strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    target: 'web',
    entry: { 
        vendor: ['react', 'redux', 'mapbox-gl/dist/mapbox-gl', 'jquery', 'popper.js', 'bootstrap/dist/js/bootstrap.min.js', './src/assets/font-awesome/js/all.js'],
        App: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.(woff(2)?|ttf|eot|svg)(\?[a-z0-9=.]+)?$/, //(?[a-z0-9=.]+)?$/, //(\?v=[0-9]\.[0-9]\.[0-9])?$/, //to support @font-face rule
            use: [{
                loader: 'url-loader',
                query: {
                    limit: '10000',
                    name: '[name].[ext]'
                    // the fonts will be emmited to public/assets/fonts/ folder the fonts will be
                    // put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf);
                    // }
                }
            }, {
                loader: 'file-loader',
                query: {
                    limit: '10000',
                    name: '[name].[ext]'
                    // the fonts will be emmited to public/assets/fonts/ folder the fonts will be
                    // put in the DOM <style> tag as eg. @font-face{ src:url(assets/fonts/font.ttf);
                    // }
                }
            }]
        }, {
            test: /\.(jsx|js)$/,
            exclude: /node_modules/,
            use: [{
                loader: "babel-loader?cacheDirectory"
            }, {
                loader: "source-map-loader"
            }, ]
        }, {
            test: /\.(png|jpe?g|gif|ico|svg)$/i,
            use: [{
                    loader: "url-loader"
                },
                {
                    loader: "file-loader"
                }
            ]
        }, {
            resolve: {
                alias: {
                    '@': path.resolve('src'),
                    '~': path.resolve('node_modules')
                },
                extensions: ['.js', '.jsx']
            }
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            inject: 'body'
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/'
    }

};