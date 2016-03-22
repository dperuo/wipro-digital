module.exports = {
    entry: './src/js/index.js',
    output: {
        path: './dist/js',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.html$/, loader: 'html' }
        ]
    }
};
