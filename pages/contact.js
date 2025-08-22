import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  async function submit(e) {
    e.preventDefault()
    setStatus('')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
    const data = await res.json()
    if (res.ok) setStatus('Thanks! We’ll get back soon.')
    else setStatus(data.error || 'Something went wrong')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">Contact</h1>

        <form onSubmit={submit} className="bg-white rounded-2xl border p-6 shadow-sm max-w-xl space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input className="mt-1 w-full border rounded-lg px-3 py-2" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" className="mt-1 w-full border rounded-lg px-3 py-2" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea rows="4" className="mt-1 w-full border rounded-lg px-3 py-2" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
          </div>
          <button className="px-5 py-2 bg-[var(--sb-green)] text-white rounded-lg hover:opacity-90">Send</button>
        </form>

        {status && <p className="mt-4 text-[var(--sb-green)] font-semibold">{status}</p>}
      </main>
      <Footer />
    </div>
  )
}
