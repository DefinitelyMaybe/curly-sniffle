export {
  compile,
  parse,
  preprocess,
  VERSION as svelteVersion,
  walk,
} from "https://cdn.jsdelivr.net/npm/svelte@3.42.3/compiler.mjs";
import {  } from "https://esm.sh/svelte";
import {  } from "https://cdn.skypack.dev/svelte@3.43.1/compiler.mjs";
export * as colors from "https://deno.land/std@0.106.0/fmt/colors.ts";
export { ensureFile, exists } from "https://deno.land/std@0.106.0/fs/mod.ts";
export {
  basename,
  extname,
  isAbsolute,
  join,
  normalize,
  relative,
  resolve,
  toFileUrl,
} from "https://deno.land/std@0.106.0/path/mod.ts";
export { serve, serveTLS } from "https://deno.land/std@0.106.0/http/mod.ts";
export { Application, Router } from "https://deno.land/x/oak@v7.6.3/mod.ts";
export {
  Bundler,
  defaultPlugins,
  Logger,
  Server as bundlerServer,
  Watcher,
} from "https://deno.land/x/bundler@0.8.1/mod.ts";
export {
  rollup,
  VERSION as rollupVersion,
} from "https://deno.land/x/drollup@2.52.7+0.19.1/mod.ts";
export {
  build,
  formatMessages,
  initialize,
  serve as esServe,
  stop,
  transform,
  version as esbuildVersion,
} from "https://deno.land/x/esbuild@v0.13.4/mod.js";
export type {
  HTTPSOptions,
  Response,
  Server,
  ServerRequest,
} from "https://deno.land/std@0.106.0/http/mod.ts";

// import less from "https://deno.land/x/aleph@v0.2.28/vendor/less/less.js";
// export { less };
// export * from "https://denopkg.com/crewdevio/deno_sass2/mod.ts";
// export * from "https://denopkg.com/crewdevio/wocket@dev/mod.ts";
