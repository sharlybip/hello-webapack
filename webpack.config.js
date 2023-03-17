const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { Template } = require('webpack');


const rulesForStyles = {
    test: /\.css$/,
    use: ['style-loader','css-loader']
}
const ruleForJs = {
    test: /\.js$/,
    loader: 'babel-loader',
    options: {
        presets: [
            [
                '@babel/preset-react',
                {
                    runtime: 'automatic'
                }
            ]
        ]
    }
}
const  rules = [ruleForJs, rulesForStyles]

module.exports = {
    // entry: './src/index.js' 
    output: {
        path: path.resolve(__dirname, 'the_name_you_want_as_dist')
    },
    plugins: [
        new HtmlWebpackPlugin({template: 'src/index.html'})
    ],
    module: { rules },


}