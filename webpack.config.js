const path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
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