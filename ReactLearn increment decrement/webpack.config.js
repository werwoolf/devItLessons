const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.mjs',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {test: /\.html$/i, loader: 'html-loader',},
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader",]},
            {test: /\.(gif|png|jpe?g|svg)$/i, use: ['file-loader', {loader: 'image-webpack-loader', options: {disable: true,},},],},
            {test: /\.m?js$/, exclude: /(node_modules|bower_components)/, use: {loader: 'babel-loader', options: {presets: ['@babel/preset-env',"@babel/preset-react"]}}},
        ]
},
}