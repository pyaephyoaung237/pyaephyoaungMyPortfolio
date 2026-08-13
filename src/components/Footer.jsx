import { profile, navLinks } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-navy-700 py-8 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-navy-700 hover:text-navy-600 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-navy-700">
          <p>
            © {new Date().getFullYear()} . All rights reserved.
          </p>

          <p>
            Designed & Built by {profile.name}
          </p>
        </div>

      </div>
    </footer>
  )
}