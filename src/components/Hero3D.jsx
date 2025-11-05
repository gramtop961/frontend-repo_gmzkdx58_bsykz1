import Spline from '@splinetool/react-spline';
import { Cpu, Shield, Zap } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative pt-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.35),rgba(236,72,153,0.15)_40%,transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="py-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
              <span className="inline-flex h-2 w-2 rounded-full bg-cyan-300 animate-pulse" />
              Futuristic AI Workspace
            </div>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              All‑in‑One AI Tools Platform
            </h1>
            <p className="mt-4 text-lg text-white/70 max-w-2xl">
              Build, analyze and create with a unified suite of intelligent tools. A 3D brain centerpiece reflects our focus on healthcare, technology and neuroscience.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                <Cpu className="w-4 h-4 text-cyan-300" /> Multimodal
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                <Zap className="w-4 h-4 text-fuchsia-300" /> Real‑time
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80">
                <Shield className="w-4 h-4 text-yellow-300" /> Secure
              </div>
            </div>
          </div>

          <div className="h-[420px] sm:h-[520px] lg:h-[640px] w-full rounded-xl overflow-hidden border border-white/10 bg-black/40">
            <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
