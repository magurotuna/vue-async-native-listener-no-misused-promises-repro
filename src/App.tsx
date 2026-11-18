import { defineComponent, ref } from 'vue'

export default defineComponent(() => {
  const data = ref('')

  async function load(): Promise<void> {
    const res = await fetch('/api/data')
    data.value = await res.text()
  }

  // Vue catches a promise that a listener returns and sends a rejection to app.config.errorHandler.
  // typescript-eslint reports this line, because `onClick` is typed `(payload: MouseEvent) => void`.
  return () => <button onClick={load}>Load</button>
})
