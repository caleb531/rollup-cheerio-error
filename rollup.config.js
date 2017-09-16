import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
// import json from 'rollup-plugin-json';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'iife',
    name: 'yvs'
  },
  plugins: [
    resolve(),
    commonjs(),
    // Uncommenting this (along with the import above) doesn't fix things
    // json()
  ]
};
