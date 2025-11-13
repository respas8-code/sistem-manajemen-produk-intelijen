import { useState } from 'react'

function App() {
  const [message, setMessage] = useState("")

  async function testAPI() {
    const res = await fetch("http://localhost:4000")
    const text = await res.text()
    setMessage(text)
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Aplikasi Produk Intelijen</h1>
      <button onClick={testAPI}>Test Koneksi ke API</button>
      <p>{message}</p>
    </div>
  )
}

export default App
