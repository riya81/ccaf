const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// HTMLファイルのビルド設定
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src/index.html'),
    filename: './index.html'
});
module.exports = {
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.js"
    },
    // 依存関係解決の起点となる資産を指定します。
    entry: path.join(__dirname, 'src/index.js'),
    // Babelのトランスパイル対象資産を指定します。
    module: {
        rules: [{
                test: /\.js$/,
                use: {
                    loader: 'babel-loader', //loader名
                    options: { //Babelの設定
                        presets: ['@babel/preset-env']
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|png|ico)$/,
                use: 'url-loader'
            }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['.js']
    },
    // 開発用Webサーバのポートを指定します。
    devServer: {
        port: 3001
    }
}