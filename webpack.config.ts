import path from "path";
import webpack from 'webpack';
import HtmlWebpackPlugin from "html-webpack-plugin";


const config: webpack.Configuration = {
    mode: 'development',
    // dirname - ссылка на эту папку
    // entry точка входа
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    output: {
        // contenthash генерирует хэш
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'build'),
        // очистить папку build
        clean: true,
    },
    plugins: [
        // нужен для подлючения html шаблона
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        // информация о сборке
        new webpack.ProgressPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                // не обрабатывать эту папку
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        // файлы с этим расширением не нужно вводить при импорте
        extensions: ['.tsx', '.ts', '.js'],
    },
}

export default config;
