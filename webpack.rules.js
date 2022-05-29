const include = /src/;

const tsLoader = {
    test: /\.(j|t)s$/,
    use: [{
        loader: 'ts-loader',
        options: {
            transpileOnly: false
        }
    }],
    include: [/src/, /node_modules/]
};

module.exports.rules = [
    tsLoader,
]