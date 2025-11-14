import { Sparkles, Code2, Rocket, Bot } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'AI Autocomplete',
    desc: 'Smart, context-aware suggestions that feel magical and save you time.'
  },
  {
    icon: Code2,
    title: 'Inline Chat',
    desc: 'Ask your editor to refactor, explain, or generate code without leaving the file.'
  },
  {
    icon: Bot,
    title: 'Agentic Workflows',
    desc: 'Kick off tasks and let the agent handle multi-step changes with previews.'
  },
  {
    icon: Rocket,
    title: 'Fast & Local',
    desc: 'A snappy experience with minimal setup, optimized for flow state.'
  }
]

export default function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Designed for builders</h2>
          <p className="mt-3 text-gray-600">Everything you need to move from idea to ship — quickly.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-gray-200 p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="h-10 w-10 rounded-lg bg-gray-900 text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
