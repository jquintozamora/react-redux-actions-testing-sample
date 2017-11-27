/////////////////////////////////////////////////////////
//  author: Jose Quinto - https://blog.josequinto.com
/////////////////////////////////////////////////////////

const commonPaths = require("./common-paths");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    target: 'web',
    entry: {
        bundle: './src/index.jsx'
    },
    output: {
        filename: 'static/js/[name].js',
        path: commonPaths.outputPath,
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: '/',
        pathinfo: true        
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true, // enable HMR on the server
        contentBase: commonPaths.contentBasePath, // match the output path
        publicPath: '/', // match the output `publicPath`
        port: 3000,
        historyApiFallback: true,
        stats: {
            colors: true, // color is life
            chunks: false, // this reduces the amount of stuff I see in my terminal; configure to your needs
            'errors-only': true
        }
    },
    plugins: [
        // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: commonPaths.contentBasePath + '/index.html',
        }),

        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),

        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin(),

        // do not emit compiled assets that include errors
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                include: commonPaths.srcPath          // Use include instead exclude to improve the build performance
            }
        ]
    }
};
