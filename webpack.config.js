const PACKAGE  = require('./package');

module.exports = {
    entry: './src/index.js',  //入口文件
    output: {  //输出文件路径设置
        path: __dirname,
        filename: `./lib/${PACKAGE.version}/universal-auth.js`,
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
