const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    popup: path.resolve('src/Popup/Popup.tsx'),
    options: path.resolve('src/Options/Options.tsx'),
    background: path.resolve('src/background.ts'),
    content: path.resolve('src/content.ts'),
  },
  module: {
    rules: [
      {
        use: 'ts-loader',
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        use: ['style-loader', 'css-loader'],
        test: /\.css$/i,
      },
      {
        type: 'asset/resource',
        test: /\.(jpg|jpeg|png|woff|woff2|eot|tff|svg)$/,
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('public'),
          to: path.resolve('dist'),
        },
      ],
    }),
    new HtmlPlugin({
      title: 'React Extension',
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlPlugin({
      title: 'React Extension Options',
      filename: 'options.html',
      chunks: ['options'],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
}
