const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        chunkFilename: '[id].js',
        publicPath: ''
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        compress: true,
        host: '0.0.0.0',
        disableHostCheck: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                // localIdentName: '[name]__[local]__[hash]'
                                localIdentName: '[name]__[local]'
                            }
                        }, 
                        {
                            loader: 'sass-loader'
                        }
                    ]
                })
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader'
                    }]
                })
            },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: [
            //         { loader: 'style-loader' },
            //         { 
            //             loader: 'css-loader',
            //             options: {
            //                 importLoaders: 1,
            //                 modules: true,
            //                 localIdentName: '[name]__[local]__[hash:base64:5]'
            //             }
            //          },
            //          { 
            //              loader: 'postcss-loader',
            //              options: {
            //                  ident: 'postcss',
            //                  plugins: () => [
            //                      autoprefixer({
            //                          browsers: [
            //                             "> 1%",
            //                             "last 2 versions"
            //                          ]
            //                      })
            //                  ]
            //              }
            //           }
            //     ]
            // },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: 'url-loader?limit=8000&name=images/[name].[ext]'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({ filename: 'style.css', disable: false }),

        new InterpolateHtmlPlugin({ NODE_ENV: 'production', PUBLIC_URL: '' }),

        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            filename: 'index.html',
            inject: 'body'
        }),

        new webpack.optimize.UglifyJsPlugin()
    ]
};