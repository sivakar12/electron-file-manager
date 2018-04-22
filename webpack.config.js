const path = require('path')

module.exports = {
    entry: path.join(__dirname, 'react', 'main.js'),
    output: {
        path: path.join(__dirname, 'react-build'), 
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
                        presets: ['react']
                    }
                }
            }, {
                test: /.styl$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    mode: "development",
    externals: {
        "electron": "require('electron')",
        "fs": "require('fs')",
        "os": "require('os')"
    },
    target: "electron-renderer"
}