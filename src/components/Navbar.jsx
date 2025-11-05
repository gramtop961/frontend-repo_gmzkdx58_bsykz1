import { useState } from 'react';
import { Brain, Sparkles, Rocket, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-to-tr from-cyan-500/30 to-fuchsia-500/30 border border-white/10">
              <Brain className="w-5 h-5 text-cyan-300" />
            </div>
            <span className="font-semibold text-white tracking-tight">All-in-One AI Tools</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="text-white/80 hover:text-white transition">Features</a>
            <a href="#showcase" className="text-white/80 hover:text-white transition">Showcase</a>
            <a href="#pricing" className="text-white/80 hover:text-white transition">Pricing</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 transition">
              <Sparkles className="w-4 h-4" /> Explore
            </button>
            <button className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-black bg-gradient-to-tr from-cyan-300 to-fuchsia-300 hover:from-cyan-200 hover:to-fuchsia-200 transition">
              <Rocket className="w-4 h-4" /> Get Started
            </button>
          </div>

          <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 pt-2">
              <a href="#features" className="text-white/90">Features</a>
              <a href="#showcase" className="text-white/90">Showcase</a>
              <a href="#pricing" className="text-white/90">Pricing</a>
              <div className="pt-2 flex gap-2">
                <button className="flex-1 rounded-md px-4 py-2 text-sm font-medium text-white bg-white/10 border border-white/10">Explore</button>
                <button className="flex-1 rounded-md px-4 py-2 text-sm font-medium text-black bg-gradient-to-tr from-cyan-300 to-fuchsia-300">Get Started</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
