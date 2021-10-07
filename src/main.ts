import { Application, bold, green, HttpError, red, Router } from "./deps.ts";
import { erroring, logging, timing } from "./logging.ts";

const router = new Router();
router.get("/", (ctx) => {
  ctx.response.body = Deno.readTextFileSync("index.html");
});
const app = new Application();

app.use(logging);
app.use(timing);
app.use(erroring);

app.use(router.routes());
app.use(router.allowedMethods());

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

console.log(bold(green("Starting server")));
app.listen({ hostname: "localhost", port: 8080 });
