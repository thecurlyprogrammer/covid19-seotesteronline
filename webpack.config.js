const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");


const PATHS = {
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    assets: ""
};

const PAGES = fs
    .readdirSync(PATHS.src)
    .filter(fileName => fileName.endsWith(".html"));

console.log(PAGES);

module.exports = {
    mode: 'none',
    entry: {
        app: './src/js/index.js'
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'src/js/index.js'
    },
    target: 'web',
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true
                }
            }
        }
    },
    module:{
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        // File loader
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'src/assets/icons/[name].[ext]'
              },
            },
          ],
        },
        // CSS loader
        {
          test: /\.css$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        // Sass loader
        {
          test: /\.s[ac]ss$/i,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ]
    },
    plugins: [
        // new CopyWebpackPlugin([]),
        ...PAGES.map(
            page => new HtmlWebpackPlugin({
                template: `${PATHS.src}/${page}`,
                filename: `./${page}`,
                minify: true
            })
        )
    ]
};