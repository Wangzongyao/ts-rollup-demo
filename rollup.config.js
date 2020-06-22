import path from 'path';
import RollupPluginBabel from '@rollup/plugin-babel'
import RollupPluginReplace from '@rollup/plugin-replace'
import RollupPluginCommonJs from '@rollup/plugin-commonjs'
import RollupPluginTypescript from '@rollup/plugin-typescript'
import RollupPluginNodeResolve from '@rollup/plugin-node-resolve'


export default {
    input: path.join(__dirname, './src/index.tsx'),
    output: {
        file: path.join(__dirname, './dist/bundle.js'),
        format: 'iife',
        name: 'iife'
    },
    plugins: [
        RollupPluginNodeResolve({ 
            browser: true,
        }),
        RollupPluginCommonJs({ 
            extensions: ['.js', '.ts', '.tsx'] 
        }),
        RollupPluginBabel({
            exclude: ['node_modules/**'],
            babelHelpers: 'runtime',
        }),
        RollupPluginTypescript({ 
            module: 'commonjs',
            target: 'es5',
            lib: ['es5', 'es6', 'dom'],
        }),
        RollupPluginReplace({
            "process.env.NODE_ENV": true,
        })
    ]
}