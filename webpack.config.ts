import webpack from 'webpack'
import {join} from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

function dist(path: string = ".") {
    return join(__dirname, 'dist', path);
}

function src(path: string = ".") {
    return join(__dirname, 'src', path);
}


const config: webpack.Configuration = {
    context: __dirname,
    entry: src('main.ts'),
    output: {
        filename: '[name].js',
        path: dist()
    },
    target: 'web',
    plugins: [new HtmlWebpackPlugin({
        filename: dist('index.html'),
        template: src('views/index.html')
    })],
    module: {
        rules: [
            {
                test: /\.ts$/, use: 'ts-loader'
            },
            {
                test: /\.s[ca]ss$/, use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        alias: {
            "@": src()
        }
    }
}

export default config;