import { Rocket } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-gray-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 text-white flex items-center justify-center shadow-sm">
            <Rocket className="size-5" />
          </div>
          <span className="font-semibold text-gray-900">Pulse Analytics</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-9 px-4 items-center rounded-md border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors">
            Sign in
          </button>
          <button className="h-9 px-4 items-center rounded-md bg-gray-900 text-white hover:bg-black transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  )
}
