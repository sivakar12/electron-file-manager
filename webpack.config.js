const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const outputFolder = path.resolve(__dirname, 'build')

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'index.js',
        path: outputFolder
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    module: {
        rules: [
            {
                test:  /\.(j|t)sx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                "targets": {
                                    "node": "10"
                                }
                            }
                        ],
                        "@babel/preset-typescript",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "react-hot-loader/babel"
                    ]
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: ['file-loader']
              }
        ]
    },
    devServer: {
        port: 3000
    },
    target: 'electron-renderer'
}