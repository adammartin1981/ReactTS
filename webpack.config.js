const outDir = 'public';

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    output: {
        path: __dirname + '/' + outDir,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './' + outDir,
        hot: true
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    plugins: ['react-hot-loader/babel'],
                    presets:['react']
                }
            }]
        }]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    }
};
