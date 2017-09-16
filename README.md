# Rollup Cheerio Error

This small project demonstrates an error I am experiencing in loading the
[cheerio](https://www.npmjs.com/package/cheerio) package using
[Rollup](https://github.com/rollup/rollup).

## The Problem

I am having an issue where Rollup will error out if I try to import cheerio as a
module.

```
$ npm install
$ npm run build

> rollup-cheerio-error@1.0.0 build /Users/Caleb/Repositories/rollup-cheerio-error
> rollup -c


src/index.js → dist/index.js...
[!] Error: Unexpected token
node_modules/entities/maps/decode.json (1:4)
1: {"0":65533,"128":8364,"130":8218,"131":402,"132":8222,"133":8230,"134":8224,"135":8225,"136":710,"137":8240,"138":352,"139":8249,"140":338,"142":381,"145":8216,"146":8217,"147":8220,"148":8221,"149":8226,"150":8211,"151":8212,"152":732,"153":8482,"154":353,"155":8250,"156":339,"158":382,"159":376}
       ^
```

If I attempt to (which some similar online questions has suggested), I still
receive errors:

```
rollup-cheerio-error node8 master ❯ npm run build

> rollup-cheerio-error@1.0.0 build /Users/Caleb/Repositories/rollup-cheerio-error
> rollup -c


src/index.js → dist/index.js...
preferring built-in module 'string_decoder' over local alternative at '/Users/Caleb/Repositories/rollup-cheerio-error/node_modules/string_decoder/lib/string_decoder.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
preferring built-in module 'string_decoder' over local alternative at '/Users/Caleb/Repositories/rollup-cheerio-error/node_modules/string_decoder/lib/string_decoder.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
preferring built-in module 'string_decoder' over local alternative at '/Users/Caleb/Repositories/rollup-cheerio-error/node_modules/string_decoder/lib/string_decoder.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
preferring built-in module 'string_decoder' over local alternative at '/Users/Caleb/Repositories/rollup-cheerio-error/node_modules/string_decoder/lib/string_decoder.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
preferring built-in module 'string_decoder' over local alternative at '/Users/Caleb/Repositories/rollup-cheerio-error/node_modules/string_decoder/lib/string_decoder.js', pass 'preferBuiltins: false' to disable this behavior or 'preferBuiltins: true' to disable this warning
[!] Error: Duplicate export 'default'
node_modules/cheerio/lib/options.js (26:22)
24: export default options;
25: export { options as __moduleExports };
26: export { default_1 as default };
                          ^
27: export { flatten };
```

In both cases, the Cheerio source is not present in the compiled `dist/index.js`
bundle.
