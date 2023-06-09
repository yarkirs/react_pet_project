import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',

        // не обрабатывать эту папку
        exclude: /node_modules/,
    };
    const cssLoaders = {
        test: /\.s[ac]ss$/i,
        use: [
        // Creates `style` nodes from JS strings
        "style-loader",
        // Translates CSS into CommonJS
        "css-loader",
        // Compiles Sass to CSS
        "sass-loader",
        ],
    };

    return [
        typescriptLoader,
        cssLoaders,
    ]
}
