import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1">
            Live dashboards · AI insights · API-ready
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
            Analytics that feel
            <span className="block bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent"> fast, futuristic, and focused</span>
          </h1>
          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl">
            Pulse turns raw product data into clear stories. Ship dashboards in minutes, explore trends in 3D, and share insights that actually move the needle.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <button className="h-11 px-5 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">
              Start free
            </button>
            <button className="h-11 px-5 rounded-md border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">
              Book a demo
            </button>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
            <div className="flex -space-x-2">
              <img className="inline-block size-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/64?img=1" alt="" />
              <img className="inline-block size-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/64?img=2" alt="" />
              <img className="inline-block size-8 rounded-full ring-2 ring-white" src="https://i.pravatar.cc/64?img=3" alt="" />
            </div>
            <span>Trusted by 2,000+ product teams</span>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden border border-gray-200/70 bg-white shadow-sm">
          <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[380px] bg-[radial-gradient(ellipse_at_top,rgba(79,70,229,0.08),rgba(79,70,229,0)_60%)]" />
    </section>
  )
}
