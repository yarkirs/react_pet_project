export type TBuildMode = 'production' | 'development';
export interface BuildPaths {
    entry: string
    build: string
    html: string
}

export interface BuildOptions {
    mode: TBuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}

export interface BuildEnv {
    mode: TBuildMode
    port: number
}
