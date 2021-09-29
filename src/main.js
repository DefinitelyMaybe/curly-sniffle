import { Application, Router, red } from "./deps.ts";
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

app.addEventListener("error", (evt) => {
  let msg = `[${red("error")}] `;
  if (evt.error instanceof Error) {
    msg += `${evt.error.name}: ${evt.error.message}`;
  } else {
    msg += Deno.inspect(evt.error);
  }
  if (
    (evt.error instanceof HttpError && evt.error.status >= 400 &&
      evt.error.status <= 499)
  ) {
    if (evt.context) {
      msg += `\n\nrequest:\n  url: ${evt.context.request.url}\n  headers: ${
        Deno.inspect([...evt.context.request.headers])
      }\n`;
    }
  }
  if (evt.error instanceof Error && evt.error.stack) {
    const stack = evt.error.stack.split("\n");
    stack.shift();
    msg += `\n\n${stack.join("\n")}\n`;
  }
  console.error(msg);
});

app.addEventListener("listen", (evt) => {
  console.log(
    `listening on ${
      evt.secure ? "https" : "http"
    }://${evt.hostname}:${evt.port}/`,
  );
});

app.use(router.routes())
app.use(router.allowedMethods())

// addEventListener("fetch", app.fetchEventHandler())

console.log("Starting server");
app.listen({ hostname: "localhost", port: 8080 });