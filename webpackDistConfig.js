const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {optimize} = require('webpack');

const webpackDistConfig = {
  output: {
    filename: 'index-[hash].js'
  },
  module: {
    loaders: [
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
                minimize: true
              }
            },
            'postcss-loader',
            {
              loader: 'sass-loader',
              options: {
                includePaths: [
                  path.resolve('./node_modules/bootstrap-sass/assets/stylesheets')
                ]
              }
            }]
        })
      },
      {
        test: /\.(png|jpg|gif|svg|ico|eot|ttf|woff|woff2)$/,
        loader: 'file-loader?name=[path][name]-[hash].[ext]'
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
          ignoreCustomFragments: [/\{\{.*?}}/],
          interpolate: 'require',
          minimize: true,
          exportAsEs6Default: true
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'index-[contenthash].css'
    }),
    new optimize.UglifyJsPlugin()
  ]
};

module.exports = webpackDistConfig;
