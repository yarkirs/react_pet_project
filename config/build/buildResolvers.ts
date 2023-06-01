import { ResolveOptions } from "webpack";

export function buildResolvers(): ResolveOptions {
    return {
        // файлы с этим расширением не нужно вводить при импорте
        extensions: ['.tsx', '.ts', '.js'],
    }
}
