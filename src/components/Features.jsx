import { BarChart3, Shield, Zap, Sparkles } from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Unified Metrics',
    desc: 'Bring product, billing, and marketing into one clean source of truth.'
  },
  {
    icon: Zap,
    title: 'Real-time Streams',
    desc: 'Ingest events at scale with sub-second processing and alerts.'
  },
  {
    icon: Shield,
    title: 'Secure by Default',
    desc: 'Row-level access, SOC2-ready logs, and SSO for peace of mind.'
  },
  {
    icon: Sparkles,
    title: 'AI Insight Layer',
    desc: 'Summaries, anomalies, and proactive suggestions built-in.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">Everything you need to move fast</h2>
          <p className="mt-3 text-gray-600">Opinionated defaults and great DX so you can focus on what matters.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl border border-gray-200/70 bg-white p-5 shadow-sm transition hover:shadow-md">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 text-indigo-600 flex items-center justify-center">
                  <f.icon className="size-5" />
                </div>
                <h3 className="font-medium text-gray-900">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
              <div className="pointer-events-none absolute -bottom-8 -right-10 size-24 rounded-full bg-cyan-500/10 blur-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
