# Async native listener reported by `no-misused-promises`

`src/App.tsx` passes an async function to `onClick` of a `<button>`. Vue catches the promise that the listener returns, but `@typescript-eslint/no-misused-promises` reports the listener, because `@vue/runtime-dom` types it as `(payload: MouseEvent) => void`.

To run it in the browser, open it in [StackBlitz](https://stackblitz.com/github/magurotuna/vue-async-native-listener-no-misused-promises-repro) and run the commands below in the terminal.

```sh
npm install
npx tsc --noEmit   # no errors
npx eslint .       # src/App.tsx:13:32 error Promise-returning function provided to attribute where a void return was expected
```
