const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'inline-source-map',
    entry: {
      app: './src/index.js'
    },
    output: {
        filename:  './js/[name].js',
        path: path.resolve(__dirname, '../docs'),
        publicPath: ''
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          {
            test: /\.css$/,
            use: [ 
              MiniCssExtractPlugin.loader,
              {
                loader: 'css-loader',
                options: { sourceMap: true }
              }, 
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true,
                  config: {
                    path: './src/js/postcss.config.js'
                  } 
                }
              }
            ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[path][name].[ext]',
                },
              },
            ],
          }
        ]
    },
    devServer: {
        contentBase: './docs',
    },
    plugins: [
      new HtmlWebpackPlugin({
        hash: false,
        template: `./src/index.html`,
        filename: 'index.html'
      }),
      new MiniCssExtractPlugin({
        filename: './css/[name].css'
      }),
      new CopyWebpackPlugin([
        { from: './src/assets', to: './assets' },
        { from: './src', to: '' }
      ])
    ]
};