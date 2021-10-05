import { assertEquals } from "https://deno.land/std@0.93.0/testing/asserts.ts";

Deno.test({
  name: "hello world",
  fn: () => {
    const x = 1 + 2;
    assertEquals(x, 3);
  },
});
