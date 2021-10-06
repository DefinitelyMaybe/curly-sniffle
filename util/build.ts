/**
 * Copyright (c) Crew Dev.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  DevServer,
  ImportMapPlugin,
  postcss,
  Svelte,
  terser,
} from "../src/shared/internal_plugins.ts";
import type { OutputOptions, RollupOptions } from "./deps.ts";
import type { RollupBuildProps } from "./types.ts";
import { rollup, toFileUrl } from "./deps.ts";

const defaultArgs = {
  dir: "./public/dist",
  entryFile: "./src/main.js",
  generate: "dom",
  plugins: [],
  production: false,
  cache: undefined,
  ipv4,
};

export function build(args = defaultArgs) {
  // const base = toFileUrl(Deno.cwd()).href;

  // const generate = "ssg" "ssr" "dom";

  // const defaults = [
  //       ImportMapPlugin({
  //         maps: "./import_map.json",
  //       }),
  //       ...plugins,
  //       (await DevServer(ipv4))!,
  //       Svelte({ generate }),
  //       postcss(),
  //       terser(),
  //     ]

  // const options = {
  //   input: new URL(entryFile, `${base}/`).href,
  //   plugins: [...defaults],
  //   output: {
  //     dir,
  //     format: "es" as const,
  //     sourcemap: !production,
  //   },
  //   cache,
  //   treeshake: production
  // };

  // const bundle = await rollup(options);
  // await bundle.write(options.output as OutputOptions);
  // await bundle.close();

  // return bundle;
  return "WIP";
}
