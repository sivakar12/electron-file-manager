const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'react', 'main.js'),
    output: {
        path: path.join(__dirname, 'react', 'dist'), 
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['react', 'flow', 'stage-3']
                    }
                }
            }, {
                test: /.styl$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'stylus-loader']
                })
            }, {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader?name=fonts/[name].[ext]'
            }
        ]
    },
    mode: "development",
    externals: {
        "electron": "require('electron')",
        "fs": "require('fs')",
        "os": "require('os')",
        "child_process": "require('child_process')"
    },
    target: "electron-renderer",
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin('style.css')
    ]
}
