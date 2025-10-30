export default function Footer() {
  return (
    <footer className="pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-200/70 bg-gradient-to-br from-gray-50 to-white p-8 sm:p-10 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">Ready to see your data come alive?</h3>
          <p className="mt-2 text-gray-600">Spin up your first dashboard in under 5 minutes.</p>
          <div className="mt-5 flex items-center justify-center gap-3">
            <button className="h-11 px-5 rounded-md bg-gray-900 text-white hover:bg-black transition-colors">Start free</button>
            <button className="h-11 px-5 rounded-md border border-gray-200 text-gray-800 hover:bg-gray-50 transition-colors">Contact sales</button>
          </div>
        </div>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Pulse Analytics. All rights reserved.</p>
          <div className="flex items-center gap-5 mt-4 sm:mt-0">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Security</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
