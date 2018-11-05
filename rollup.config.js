import babel from 'rollup-plugin-babel';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import localResolve from 'rollup-plugin-local-resolve';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

export default {
    input: 'build/emotive.ts',
    output: [
        {
            file: 'dist/emotive.js',
            format: 'umd',
            name: 'Emotive'
        },
        {
            file: 'dist/emotive.cjs.js',
            format: 'cjs',
            name: 'Emotive',
        },
        {
            file: 'dist/emotive.esm.js',
            format: 'es'
        },
    ],
    plugins: [
        typescript(),
        peerDepsExternal(),
        babel({exclude: 'node_modules/**'}),
        localResolve(),
        resolve(),
        commonjs(),
        minify()
    ],
};
