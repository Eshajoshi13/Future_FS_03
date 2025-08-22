import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-[var(--sb-green)] text-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-bold text-lg">Starbucks AI</span>
        </Link>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:opacity-90">Home</Link>
          <Link href="/menu" className="hover:opacity-90">Menu</Link>
          <Link href="/orders" className="hover:opacity-90">Orders</Link>
          <Link href="/contact" className="hover:opacity-90">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
