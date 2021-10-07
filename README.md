# curly-sniffle

Doing some devops yo.

Next steps:

- WebFramework
  - Svelte

To use esbuild:

```js
import * as esbuild from "https://deno.land/x/esbuild@v0.13.3/mod.js";
const ts = "let test: boolean = true";
const result = await esbuild.transform(ts, { loader: "ts" });
console.log("result:", result);
esbuild.stop();
```
