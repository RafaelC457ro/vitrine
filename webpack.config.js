const path = require('path')
const cssnext = require('postcss-cssnext')
const cssnano = require('cssnano')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[local]--[hash:base64]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => {
                return [
                  cssnext({
                    customProperties: {
                      warnings: false
                    },
                    warnForDuplicates: false
                  }),
                  cssnano({
                    discardUnused: {
                      fontFace: false,
                      keyframes: false
                    },
                    zindex: false,
                    reduceIdents: false
                  })
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: path.resolve(__dirname, 'public/index.html')
    })
  ]
}
