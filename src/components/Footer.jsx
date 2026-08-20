import { navLinks } from '../data'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">

        {/* Top Section: Social Icons on Left & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-2 ">

          {/* Social Icons (Moved to Left) */}
          <div className="flex justify-start gap-3">
            <a
              href="https://github.com/pyaephyoaung237"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ backgroundColor: '#ff5e3a' }}
              className="w-10 h-10 flex items-center justify-center
              rounded-full text-white shadow-sm
              hover:bg-[#e04d2c]
              transition-colors duration-300"
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/pyae-phyo-aung-1a3923346?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ backgroundColor: '#ff5e3a' }}
              className="w-10 h-10 flex items-center justify-center
              rounded-full text-white shadow-sm
              hover:bg-[#e04d2c]
              transition-colors duration-300"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="mailto:pyaephyoaung2377@gmail.com"
              aria-label="Email"
              style={{ backgroundColor: '#ff5e3a' }}
              className="w-10 h-10 flex items-center justify-center
              rounded-full text-white shadow-sm
              hover:bg-[#e04d2c]
              transition-colors duration-300"
            >
              <FaEnvelope size={17} />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-navy-600
                hover:text-navy-700 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-6">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-navy-600">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-sm text-navy-600">
              Designed & Built By PyaePhyoAung
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}
