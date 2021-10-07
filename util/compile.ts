import {
  compile,
  // parse,
  // preprocess,
  // svelteVersion,
  // walk,
} from "./deps.ts";

const source = Deno.readTextFileSync("src/components/app.svelte");

const compiledSRC = compile(source);

Deno.writeTextFileSync("svelte.js", compiledSRC.js.code);
Deno.writeTextFileSync("svelte.css", compiledSRC.css.code);
// console.log(compiledSRC.js);
