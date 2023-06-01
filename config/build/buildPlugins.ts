import webpack from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {BuildOptions} from "./types/config";

export function buildPlugins({ paths }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // нужен для подключения html шаблона
        new HtmlWebpackPlugin({
        template: paths.html,
    }),
        // информация о сборке
        new webpack.ProgressPlugin(),
    ]
}
