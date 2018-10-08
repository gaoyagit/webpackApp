module.exports = {
    entry: "./main.js",//打包的js
    output: {
        path: __dirname + "/build",//打包后的文件存放的地方
        filename: "js/bundle.js",//打包后bundle文件的文件名
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:jpg|gif|png|jpeg)$/,
                loader: 'url-loader?limit=10240&name=images/[name]-[hash:10].[ext]'
            }
        ]
    },
    plugins: [],

};