import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-[var(--sb-green)] text-white">
          <div className="max-w-6xl mx-auto px-6 py-24 text-center">
            <h1 className="text-5xl font-extrabold">Brewed Fresh with AI ☕</h1>
            <p className="mt-4 text-white/90 text-lg">
              Modern Starbucks experience, reimagined with Next.js + Tailwind + API backend.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <Link href="/menu" className="px-6 py-3 bg-white text-[var(--sb-green)] rounded-lg font-semibold hover:bg-neutral-100">View Menu</Link>
              <Link href="/orders" className="px-6 py-3 border border-white/50 rounded-lg hover:bg-white/10">Your Orders</Link>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-6">
          {[
            { title: 'API Menu', text: 'Menu served from /api/menu with JSON data.' },
            { title: 'Orders API', text: 'Create and list orders via /api/orders (file persistence).' },
            { title: 'Contact', text: 'Submit messages via /api/contact.' },
          ].map((f) => (
            <div key={f.title} className="bg-white rounded-2xl border shadow-sm p-6">
              <div className="h-10 w-10 rounded-lg bg-white ring-2 ring-[var(--sb-green)] grid place-items-center text-[var(--sb-green)] font-bold">AI</div>
              <h3 className="mt-4 font-semibold text-lg text-[var(--sb-green)]">{f.title}</h3>
              <p className="mt-2 text-gray-700">{f.text}</p>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
