const webpack = require('webpack');

const PORT = 4200;
module.exports = {
  entry: {
    'app': [
      'react-hot-loader/patch',
      'webpack/hot/only-dev-server',
      './src/index.tsx'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname,'./dist'),
    publicPath: '/'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      { test: /\.css$/, loader: ['style-loader', 'css-loader?modules' ] },
      { test: /\.scss$/, use: [ 'style-loader', 'css-loader?modules',
        {
          loader: 'postcss-loader',
          options: {
            plugins: function () { return [require('autoprefixer')] }
          }
        },
        { loader: 'sass-loader' }
      ] },
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
        query: {
          useTranspileModule: true,
          useBabel: true,
          useCache: true,
        }
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],

  devServer: {
    host: 'localhost',
    port: PORT,

    historyApiFallback: true,
    // respond to 404s with index.html

    hot: true,
    // enable HMR on the server
  },

  externals: {
      'react': 'React',
      'react-dom': 'ReactDOM'
  }
};
