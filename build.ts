import { emptyDirSync } from "https://deno.land/std@0.93.0/fs/mod.ts";

console.log("Hello world");
const p = `build`
const f = `hello.txt`

emptyDirSync(p)
Deno.writeTextFileSync(`${p}/${f}`, "world")