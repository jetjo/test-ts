const path = require('path');

const IS_PROD = ['prod', 'production'].includes(process.env.NODE_ENV);
// 测试
const rules = require('./webpack.rules').rules;
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
module.exports = {
    devtool: 'eval',
    context: __dirname,
    entry: [
        // 'core-js',
        './src/index.ts'],
    resolve: {
        extensions: ['.ts', '...']
    },
    mode: 'production',
    module: {
        rules
    },
    plugins: [new ForkTsCheckerWebpackPlugin()],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
        runtimeChunk: 'multiple'
    }
}
