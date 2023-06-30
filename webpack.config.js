const path = require("path");
var webpack = require("webpack");
module.exports = {
    mode: "development",
    context: __dirname,
    entry: "./src/main.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
    },

    devtool: 'source-map',

    devServer: {
        
        static: './',
        hot: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],

    module: {
        rules: [
            {
		test: /\.(js)x?$/,
		exclude: /node_modules/,
		use: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                use: {
		    loader: 'ts-loader',
		    options: {
			compilerOptions: {
			    noEmit: false,
			},
		    },
		},
		exclude: /node_modules|\.d\.ts$/
	    },
            {
                test: /\.wgsl$/,
                use: {
                    loader: "ts-shader-loader"
                }
            }
        ]
    },
    
    resolve: {
        extensions: [".wasm", ".ts", ".tsx", ".mjs", ".cjs", ".js", ".json"],
    }
}
