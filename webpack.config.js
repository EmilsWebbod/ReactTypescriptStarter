const path = require('path');

module.exports = {
    entry: {
        'app': [
            'react-hot-loader/patch',
            './src/index.tsx'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'./dist')
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};
