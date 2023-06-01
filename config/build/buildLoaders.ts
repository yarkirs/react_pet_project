import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        // не обрабатывать эту папку
        exclude: /node_modules/,
    };

    return [
        typescriptLoader,
    ]
}
