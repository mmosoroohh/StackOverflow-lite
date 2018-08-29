const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        signup: "./UI/js/signup.js",
        signin: "./UI/js/signin.js"
    },
    output: {
        path: path.resolve(__dirname, "UI/public/dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["babel-preset-env"]
                }
            }
        }]
    },
    devtool: "inline-source-map"
}