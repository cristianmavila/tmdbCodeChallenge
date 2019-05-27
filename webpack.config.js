var path = require("path");
var DIST_DIR = path.resolve(__dirname, "build");
var SRC_DIR = path.resolve(__dirname, "src");
var config = {
    entry:['@babel/polyfill', SRC_DIR + '/app/index.js'],
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/",
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: SRC_DIR,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }

            }
        ]
    }
};
module.exports = config;