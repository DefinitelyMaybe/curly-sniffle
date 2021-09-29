import { Application, Router } from "./deps.ts";
import { logging, timing, erroring } from "./logging.ts";

const router = new Router()
router.get("/", (ctx, next) => {
  ctx.response.body = "Nothing here yet."
  // Deno.readTextFile("index.html")
})
const app = new Application();

// Basic Logging
app.use(logging);
// Add timing to response headers
app.use(timing);
// simple errors?
app.use(erroring)

app.addEventListener("error", (e) => {
  console.log("ERROR: ", e.error);
});

app.addEventListener("listen", (e) => {
  console.log(e.hostname);
  console.log(`Listening on http://${e.hostname}:${e.port}/`);
});

app.use(router.routes())
app.use(router.allowedMethods())

addEventListener("fetch", app.fetchEventHandler())

console.log("Starting server");
await app.listen({ hostname: "localhost", port: 8080 });