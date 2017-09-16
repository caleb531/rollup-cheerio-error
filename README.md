# Rollup Cheerio Error

This small project demonstrates an error I am experiencing in loading the
[cheerio](https://www.npmjs.com/package/cheerio) package using
[Rollup](https://github.com/rollup/rollup).

## The Problem

I am having an issue where Rollup will error out if I try to import cheerio as a
module. Importing my other module (Mithril) works perfectly, however.

```
$ npm install
$ npm run build

> rollup-cheerio-error@1.0.0 build /Users/Caleb/Repositories/rollup-cheerio-error
> rollup -c


src/index.js → dist/index.js...
[!] Error: Duplicate export 'default'
node_modules/cheerio/lib/options.js (26:22)
24: export default options;
25: export { options as __moduleExports };
26: export { default_1 as default };
                          ^
27: export { flatten };
```
