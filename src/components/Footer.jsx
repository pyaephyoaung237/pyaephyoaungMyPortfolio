import { navLinks, profile } from '../data'
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

export default function Footer({ darkMode, lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer
      className={`relative border-t transition-colors overflow-hidden ${
        darkMode ? 'bg-gray-900 border-gray-800 text-white' : 'bg-white border-gray-100 text-black'
      }`}
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#ff5e3a]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-10 py-12">

        {/* Top Section: Brand, Navigation Links & Social Icons */}
        <div className={`flex flex-col lg:flex-row items-center justify-between gap-8 pb-10 border-b ${
          darkMode ? 'border-gray-800' : 'border-gray-100'
        }`}>

          

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => {
              const labelText = lang === 'jp' ? (link.jpLabel || link.label) : link.label;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-[#ff5e3a] ${
                    darkMode ? 'text-gray-300 hover:text-white' : 'text-black hover:text-[#ff5e3a]'
                  }`}
                >
                  {labelText}
                </a>
              );
            })}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/pyaephyoaung237"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm  hover:text-[#ff5e3a] ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  : 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
              }`}
            >
              <FaGithub size={17} />
            </a>

            <a
              href="https://www.linkedin.com/in/pyae-phyo-aung-1a3923346?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm  hover:text-[#ff5e3a] ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  : 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
              }`}
            >
              <FaLinkedin size={17} />
            </a>

            <a
              href="mailto:pyaephyoaung2377@gmail.com"
              aria-label="Email"
              className={`w-10 h-10 flex items-center justify-center rounded-full shadow-sm  hover:text-[#ff5e3a] ${
                darkMode
                  ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
                  : 'bg-gray-100 text-black hover:bg-gray-200 border border-gray-200'
              }`}
            >
              <FaEnvelope size={17}/>            </a>
          </div>

        </div>

       

      </div>
    </footer>
  )
}