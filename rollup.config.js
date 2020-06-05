import path from 'path';
import RollupPluginBabel from '@rollup/plugin-babel'
import RollupPluginCommonJs from '@rollup/plugin-commonjs'
import RollupPluginTypescript from '@rollup/plugin-typescript'
import RollupPluginNodeResolve from '@rollup/plugin-node-resolve'

export default {
    input: path.join(__dirname, './src/index.tsx'),
    output: {
        file: path.join(__dirname, './dist/bundle.js'),
        format: 'cjs'
    },
    plugins: [
        RollupPluginNodeResolve({ 
            browser: true,
        }),
        RollupPluginCommonJs({ 
            // extensions: ['.js', '.ts'] 
        }),
        RollupPluginBabel({
            runtimeHelpers: true,
            exclude: ['node_modules/**'],
        }),
        RollupPluginTypescript({ 
            module: 'commonjs',
            target: 'es5',
            lib: ['es5', 'es6'],
        }),
    ]
}