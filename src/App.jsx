import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero3D />
        <Features />
        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-3xl font-bold">Simple pricing</h2>
              <p className="mt-2 text-white/70 max-w-2xl">Get started for free. Scale with usage when you deploy to production.</p>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-black/40 p-6">
                  <h3 className="text-xl font-semibold">Starter</h3>
                  <p className="text-4xl font-extrabold mt-2">$0 <span className="text-base font-medium text-white/60">/mo</span></p>
                  <ul className="mt-4 text-sm text-white/70 space-y-2">
                    <li>• 3 projects</li>
                    <li>• Community support</li>
                    <li>• Basic templates</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md px-4 py-2 text-sm font-medium text-black bg-gradient-to-tr from-cyan-300 to-fuchsia-300 hover:from-cyan-200 hover:to-fuchsia-200 transition">Get started</button>
                </div>
                <div className="rounded-xl border border-cyan-400/30 bg-gradient-to-br from-cyan-400/10 to-fuchsia-400/10 p-6">
                  <h3 className="text-xl font-semibold">Pro</h3>
                  <p className="text-4xl font-extrabold mt-2">$29 <span className="text-base font-medium text-white/60">/mo</span></p>
                  <ul className="mt-4 text-sm text-white/80 space-y-2">
                    <li>• Unlimited projects</li>
                    <li>• Real-time agents</li>
                    <li>• Priority support</li>
                  </ul>
                  <button className="mt-6 w-full rounded-md px-4 py-2 text-sm font-medium text-white bg-black/50 border border-white/20 hover:bg-black/60 transition">Upgrade</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
