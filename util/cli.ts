/**
 * Copyright (c) Crew Dev.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import StartDev from "./src/cli/commands/start.ts";
import { RollupBuild } from "./compiler/build.ts";

// compile in dev mode
export async function dev() {
  await RollupBuild(/*{ dir: common.dom.dir, entryFile: common.entryFile }*/);
}

// start dev server
export async function serve() {
  await StartDev();
}
