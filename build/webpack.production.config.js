const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    devtool: 'mini-source-map',
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
              options: { presets: ['@babel/preset-env'] }
            }
          },
          {
            test: /\.css$/,
            use: [
              MiniCssExtractPlugin.loader,
              'css-loader',
              { loader: 'postcss-loader', options: { config: { path: './src/js/postcss.config.js' } } }
            ]
          },
          {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
              {
                loader: 'file-loader',
                options: { name: '[path][name].[ext]' },
              },
            ],
          },
          {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: [
              {
                loader: 'file-loader?name=./fonts/[name].[ext]'
              },
            ]
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
      }),
      new MiniCssExtractPlugin({ filename: './css/[name].css' }),
      new CopyWebpackPlugin([
        { from: './src/assets', to: './assets' },
        {
          from: './src',
          to: '',
          force: true,
          ignore: ['*.js', '*.html', '*.css', 'blocks/**/*']
        }
      ])
    ]
};