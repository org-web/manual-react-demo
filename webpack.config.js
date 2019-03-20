const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin'); // 自动创建html文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 清除无用文件 
const ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离文件

module.exports = {
    devtool: 'inline-source-map', // 用于开发调试，方便清楚是那个文件出错 (共有7种)
    entry: {
        index: './src/index.js' // 入口
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader!sass-loader"
            })
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: 'img/[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }]
    },
    devServer: {
        contentBase: './build',
        port: 8081,
        inline: true,
        hot: true
    },
    performance: {
        hints: "warning", // 枚举
        maxAssetSize: 30000000, // 整数类型（以字节为单位）
        maxEntrypointSize: 50000000, // 整数类型（以字节为单位）
        assetFilter: function(assetFilename) {
        // 提供资源文件名的断言函数
        return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
        
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin({
            template: 'src/index.html'
        }),
        new ExtractTextPlugin("styles.css"),
    ]
}