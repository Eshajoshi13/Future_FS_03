import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Orders() {
  const [items, setItems] = useState([])
  const [selected, setSelected] = useState('latte')
  const [message, setMessage] = useState('')

  useEffect(() => {
    refresh()
  }, [])

  function refresh() {
    fetch('/api/orders')
      .then(r => r.json())
      .then(setItems)
      .catch(console.error)
  }

  async function placeOrder(e) {
    e.preventDefault()
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ item: selected })
    })
    const data = await res.json()
    if (res.ok) {
      setMessage('Order placed! ID: ' + data.id)
      refresh()
    } else {
      setMessage('Failed: ' + (data.error || 'Unknown error'))
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Orders</h1>

        <form onSubmit={placeOrder} className="bg-white rounded-2xl border p-6 shadow-sm max-w-md">
          <label className="block text-sm font-medium mb-1">Select item</label>
          <select value={selected} onChange={e => setSelected(e.target.value)} className="w-full border rounded-lg px-3 py-2">
            <option value="latte">Latte</option>
            <option value="espresso">Espresso</option>
            <option value="cappuccino">Cappuccino</option>
          </select>
          <button className="mt-4 px-5 py-2 bg-[var(--sb-green)] text-white rounded-lg hover:opacity-90">Place Order</button>
        </form>

        {message && <p className="mt-4 text-[var(--sb-green)] font-semibold">{message}</p>}

        <h2 className="text-2xl font-bold mt-10 mb-4">Recent Orders</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(o => (
            <div key={o.id} className="bg-white rounded-2xl border p-6 shadow-sm">
              <p><span className="font-semibold">ID:</span> {o.id}</p>
              <p><span className="font-semibold">Item:</span> {o.item}</p>
              <p className="text-sm text-gray-600 mt-2">{new Date(o.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
