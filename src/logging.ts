import { red, green, cyan, bold, Middleware } from "./deps.ts";

export const logging: Middleware = async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(
    `${green(ctx.request.method)} ${
      cyan(ctx.request.url.pathname)
    } - ${bold(String(rt))}`
  );
};

export const timing: Middleware = async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};

export const erroring: Middleware = async (_ctx, next) => {
  try {
    await next();
  } catch (err) {
    console.log(`${red("Error:")} ${bold(err)}`);
    // if (err instanceof HttpError) {
    //   //
    // } else if (err instanceof Error) {
    //  //
    // } else {
    //   //
    // }

    throw err
  }
}