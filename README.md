# Reproduction on workerd of top level await + WASM

This demonstrates https://github.com/cloudflare/workers-sdk/issues/4706

To run the example on http://localhost:8080

```sh
npm i
npx workerd serve config.capnp
```

 Note the following console messages:

```text
workerd/jsg/modules.c++:336: error: Async module was not immediately resolved.
Log 2: [Module: null prototype] { add: <uninitialized> }
Log 1: Instance [WebAssembly.Instance] {} [Function: 0]
service main: Uncaught ReferenceError: Cannot access 'add' before initialization
  at worker:8:25
```
