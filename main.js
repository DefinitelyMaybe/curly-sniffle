
addEventListener("fetch", (event) => {
  const response = new Response("Hello deno deploy!", {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});