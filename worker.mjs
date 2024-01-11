// This top level await causes the subsequent top level await to break
await Promise.resolve();

// Note that when things work, "Log 1" comes before "Log 2"
// But when it breaks they are the other way around.
const x = await import("./mod-a.mjs").then((exports) => {
  console.log("Log 2:", exports);
  const total = exports.add(3, 4);
  console.log("Log 3:", total);
  return total;
});

export default {
  async fetch() {
    return new Response(x);
  },
};
