const mod = await import("./sum.wasm");
const instance = await WebAssembly.instantiate(mod.default);
console.log("Log 1:", instance, instance.exports.sum);
export const add = instance.exports.sum;
