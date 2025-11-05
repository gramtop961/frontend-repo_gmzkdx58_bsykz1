import { Brain, Sparkles, Shield, Zap, Rocket, Cpu, Globe } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Neuroscience-grade Insights',
    desc: 'Visualize complex patterns and understanding through a 3D-first interface.',
    color: 'from-cyan-400/20 to-blue-400/10',
  },
  {
    icon: Sparkles,
    title: 'Generative Studio',
    desc: 'Text, image and code generation with prompt workflows and versioning.',
    color: 'from-fuchsia-400/20 to-pink-400/10',
  },
  {
    icon: Shield,
    title: 'Privacy & Governance',
    desc: 'Role-based access, encrypted data at rest, audit trails and consent flows.',
    color: 'from-emerald-400/20 to-teal-400/10',
  },
  {
    icon: Zap,
    title: 'Real-time Agents',
    desc: 'Event-driven automations with streaming outputs and live tool use.',
    color: 'from-yellow-300/20 to-orange-300/10',
  },
  {
    icon: Cpu,
    title: 'Multimodal Pipelines',
    desc: 'Combine text, audio, vision and structured data in one canvas.',
    color: 'from-indigo-400/20 to-purple-400/10',
  },
  {
    icon: Globe,
    title: 'Extensible APIs',
    desc: 'Bring your own models and data sources with simple SDKs.',
    color: 'from-sky-400/20 to-cyan-400/10',
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Built for the future</h2>
          <p className="mt-3 text-white/70">A cohesive platform that unifies research, creation and deployment. Focus on outcomes, not glue code.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc, color }) => (
            <div key={title} className={`group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 transition`}> 
              <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition pointer-events-none`} />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-black/40 p-2">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm text-white/70">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div id="showcase" className="mt-16 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2">
            <Rocket className="w-4 h-4 text-cyan-300" />
            <h3 className="text-white font-semibold">Launch faster with presets</h3>
          </div>
          <p className="mt-2 text-white/70 text-sm">Start from curated templates for chatbots, medical analysis, research dashboards and more. Customize pipelines without leaving the canvas.</p>
        </div>
      </div>
    </section>
  );
}
