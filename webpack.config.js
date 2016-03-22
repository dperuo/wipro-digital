module.exports = {
    entry: './src/js/index.js',
    devtool: 'source-map',
    output: {
        path: './dist/js',
        sourceMapFilename: 'bundle.min.js.map',
        filename: 'bundle.min.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html' }
        ]
    }
};
