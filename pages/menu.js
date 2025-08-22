import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Menu() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/api/menu')
      .then(r => r.json())
      .then(setItems)
      .catch(console.error)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Menu</h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((m) => (
            <div key={m.id} className="bg-white rounded-2xl border p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-[var(--sb-green)]">{m.name}</h2>
              <p className="text-gray-700 mt-1">{m.description}</p>
              <p className="mt-3 font-bold">₹{m.price}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
