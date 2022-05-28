const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackDevConfig = {
  output: {
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                alias: {
                  '../fonts/bootstrap': 'bootstrap-sass/assets/fonts/bootstrap'
                },
                sourceMap: true
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve('./node_modules/bootstrap-sass/assets/stylesheets')
                ],
                sourceMap: true
              }
            }
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ico|eot|ttf|woff|woff2|webmanifest)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          ignoreCustomFragments: [/\{\{.*?}}/],
          interpolate: 'require',
          exportAsEs6Default: true
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index.css'
    })
  ],
  watch: true,
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true
  }
};

module.exports = webpackDevConfig;
