export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">© 2025 Cursor Clone. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm text-gray-600">
          <a href="#privacy" className="hover:text-gray-900">Privacy</a>
          <a href="#terms" className="hover:text-gray-900">Terms</a>
          <a href="/test" className="hover:text-gray-900">Status</a>
        </nav>
      </div>
    </footer>
  )
}
