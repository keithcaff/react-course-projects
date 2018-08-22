const path = require('path');

//expose an object to another file
module.exports = {
    entry:'./src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module : {
        rules : [
            {
                test: /\.(s?css)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
            },
        ]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer:  {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};