const path = require('path')
const fs = require('fs-extra')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const DefinePlugin = require('webpack').DefinePlugin

const plugins = []

const args = {
  prod: process.argv.includes('--prod'),
  es2015: process.argv.includes('--es2015'),
  stats: process.argv.includes('--stats'),
  clean: process.argv.includes('--clean'),
}

if (args.clean) {
  fs.removeSync(path.join(__dirname, 'public', 'dist'));
  process.exit(0)
}

const useES2015 = args.es2015 ? true : false

if (args.stats) {
  plugins.push(new BundleAnalyzerPlugin())
}

const modes = {
  prod: 'production',
  dev: 'development',
}

let mode = modes.dev

if (args.prod) {
  mode = modes.prod
  process.env.NODE_ENV = modes.prod
}

const paths = {
  entry: path.join(__dirname, 'src/gui/main.ts'),
  nomodule: path.join(__dirname, 'src/gui/nomodule.ts')
}

const entry = [paths.entry]

if (useES2015 === false) {
  entry.unshift(paths.nomodule)
}

module.exports = {
  entry,
  mode,
  output: {
    filename: `dist/${useES2015 ? 'index.es2015.js' : 'index.js'}`,
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.build.json',
          compilerOptions: {
            target: useES2015 ? 'es2015' : 'es5'
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new DefinePlugin({
      '__constants': JSON.stringify({
        MODE: mode
      })
    }),
    ...plugins
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve(__dirname, 'src')
    }
  }
}
