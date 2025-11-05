export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} All‑in‑One AI Tools. All rights reserved.</p>
          <div className="flex items-center gap-5 text-sm">
            <a className="text-white/70 hover:text-white" href="#privacy">Privacy</a>
            <a className="text-white/70 hover:text-white" href="#terms">Terms</a>
            <a className="text-white/70 hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
