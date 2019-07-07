const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // injects the css into html
                    "css-loader", // loads css into js
                    "sass-loader" // 1: compiles sass to css
                ],
            }
        ]
    }

}