import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureGrid />
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Simple pricing</h2>
            <p className="mt-3 text-gray-600">Start free, upgrade when you need more power.</p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Free', price: '$0', features: ['Basic AI chat', 'Community support', 'Personal use'] },
                { name: 'Pro', price: '$12', features: ['Faster models', 'Inline edits', 'Priority support'] },
                { name: 'Team', price: '$29', features: ['Shared context', 'Org policies', 'SAML/SSO'] },
              ].map((t) => (
                <div key={t.name} className="rounded-2xl border border-gray-200 bg-white p-6 text-left">
                  <h3 className="text-lg font-semibold text-gray-900">{t.name}</h3>
                  <p className="mt-2 text-3xl font-extrabold">{t.price}<span className="text-base font-medium text-gray-500">/mo</span></p>
                  <ul className="mt-4 space-y-2">
                    {t.features.map((f) => (
                      <li key={f} className="text-sm text-gray-600">• {f}</li>
                    ))}
                  </ul>
                  <a href="#get-started" className="mt-6 inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black/90">Choose {t.name}</a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
