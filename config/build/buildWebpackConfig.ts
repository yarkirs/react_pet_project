import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildPlugins} from "./buildPlugins";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
    const {paths, mode} = options;

    return {
        mode,
        // dirname - ссылка на эту папку
        // entry точка входа
        entry: paths.entry,
        output: {
            // contenthash генерирует хэш
            filename: "[name].[contenthash].js",
            path: paths.build,
            // очистить папку build
            clean: true,
        },
        plugins: buildPlugins(options),
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
    }
}
