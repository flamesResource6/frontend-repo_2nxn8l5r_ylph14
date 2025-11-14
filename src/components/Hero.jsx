import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M4yE7MTeWshitQbr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-28 pb-16">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-3 py-1 text-xs text-gray-700 mb-4 pointer-events-none">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            Interactive 3D Robot • Playful & Modern
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
            Build with an AI pair‑programmer
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
            A fast, delightful coding experience inspired by Cursor — with a friendly robot that follows your cursor. Type, generate, and ship faster.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-md bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-black/90 transition-colors">
              Download for macOS
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/90 px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white transition-colors border border-gray-200">
              See features
            </a>
          </div>
        </div>

        <div className="relative h-[50vh] sm:h-[60vh] lg:h-[70vh] w-full rounded-2xl border border-gray-200/60 bg-white/40 backdrop-blur-sm shadow-xl pointer-events-none">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/70 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-white pointer-events-none" />
    </section>
  )
}
