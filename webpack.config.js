const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js',

    },
    resolve:{
        extensions: ['.js']//dependiento de lo que se utulice en el proyecto se ponen las extenciones
    },
    module:{
        rules:[{

            test: /\.m?js$/,
            exclude:/node_modules/,
            use:{
                loader:'babel-loader'
            }
        },
        {
         test:/\.css$/,
         use:[MiniCssExtractPlugin.loader, 'css-loader'],   
        }
    ]

    },
    plugins:[
        new HtmlWebpackPlugin ({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin(),
    ],

}