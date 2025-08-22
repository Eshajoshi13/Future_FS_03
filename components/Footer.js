export default function Footer() {
  return (
    <footer className="bg-[var(--sb-green)] text-white mt-16">
      <div className="max-w-6xl mx-auto p-6 text-sm flex flex-col md:flex-row items-center justify-between gap-3">
        <p>© {new Date().getFullYear()} Starbucks AI Rebrand</p>
        <div className="flex gap-4">
          <a href="#" className="hover:opacity-90">Twitter</a>
          <a href="#" className="hover:opacity-90">Instagram</a>
          <a href="#" className="hover:opacity-90">Dribbble</a>
        </div>
      </div>
    </footer>
  );
}
