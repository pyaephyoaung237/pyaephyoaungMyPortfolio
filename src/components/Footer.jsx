import { navLinks } from '../data'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

export default function Footer({ darkMode, lang }) {
  return (
    <footer className={`border-t transition-colors ${
      darkMode ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-100 text-gray-900'
    }`}>
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-8">

        {/* Top Section: Social Icons on Left & Navigation */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-2">

          {/* Social Icons */}
          <div className="flex justify-start gap-3">
            <a
              href="https://github.com/pyaephyoaung237"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{ backgroundColor: '#ff5e3a' }}
              className="w-10 h-10 flex items-center justify-center
              rounded-full text-white shadow-sm
              hover:opacity-90
              transition-opacity duration-300"
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
              hover:opacity-90
              transition-opacity duration-300"
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="mailto:pyaephyoaung2377@gmail.com"
              aria-label="Email"
              style={{ backgroundColor: '#ff5e3a' }}
              className="w-10 h-10 flex items-center justify-center
              rounded-full text-white shadow-sm
              hover:opacity-90
              transition-opacity duration-300"
            >
              <FaEnvelope size={17} />
            </a>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-x-7 gap-y-3">
            {navLinks.map((link) => {
              const labelText = lang === 'jp' ? (link.jpLabel || link.label) : link.label;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-navy-600 hover:text-navy-700'
                  }`}
                >
                  {labelText}
                </a>
              );
            })}
          </div>

        </div>

       {/* Bottom */}
        <div className="pt-6">
          <div className="flex flex-col items-center gap-2">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-navy-600'}`}>
              © {new Date().getFullYear()} {lang === 'jp' ? '全著作権所有。' : 'All rights reserved.'}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-navy-600'}`}>
              {lang === 'jp' ? 'ピィエピョーアウン  によるデザインと構築' : 'Designed & Built By PyaePhyoAung'}
            </p>
          </div>
        </div>

      </div>
    </footer>
  )
}