const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
    entry: './app/index.js', // 入口文件
    output: {
        path: path.resolve(__dirname, 'build'), // 必须使用绝对地址，输出文件夹
        filename: "bundle.js", // 打包后输出文件的文件名
        publicPath: 'build/' // 打包后的文件夹
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: { 
                            modules: true
                        }
                    }]
                })
            },
        ]
    },
    plugins: [
      new ExtractTextPlugin("css/[name].[hash].css")
    ]
}