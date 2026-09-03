import { useEffect, useState } from 'react'
import { navLinks } from '../data'
import { Sun, Moon } from 'lucide-react'
import ukflag from '../assets/united-kingdom.png'
import jpflag from '../assets/japan.png'

export default function Navbar({ darkMode, setDarkMode, lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`)
          }
        })
      },
      { rootMargin: '-20% 0px -35% 0px', threshold: 0.1 }
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    setActive(href)

    const targetElement = document.querySelector(href)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'jp' : 'en'))
  }

  const getLabel = (label) => {
    if (lang === 'jp') {
      const translations = {
        Home: 'ホーム',
        About: '私について',
        Skills: 'スキル',
        Projects: 'プロジェクト',
        Experience: '経歴',
        Achievement: '実績',
        Education: '学歴',
        Contact: 'お問い合わせ',
      }
      return translations[label] || label
    }
    return label
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors transition-shadow ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
      } ${scrolled ? 'shadow-md' : 'shadow-none'}`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-16 flex items-center justify-between">
        {/* Left Side: Brand Logo */}
        <div className="flex items-center">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, '#home')}
            className={`flex items-center gap-2 font-display text-lg md:text-xl ${
              darkMode ? 'text-white' : 'text-navy-600'
            }`}
          >
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-md">
              {'</>'}
            </span>
            {lang === 'jp' ? 'ピィエピョーアウン' : 'PyaePhyoAung'}
          </a>
        </div>

        {/* Center Side: Nav Links (Desktop) */}
        <div className="hidden md:flex items-center justify-center flex-1 px-8">
          <ul className="flex items-center justify-center gap-6 lg:gap-8 whitespace-nowrap">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`relative font-medium text-sm tracking-wide transition-colors ${
                    active === link.href
                      ? darkMode
                        ? 'text-white'
                        : 'text-navy-600'
                      : darkMode
                      ? 'text-gray-300 hover:text-white'
                      : 'text-black hover:text-navy-500'
                  }`}
                >
                  {getLabel(link.label)}
                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 transition-all duration-300 ${
                      active === link.href ? 'w-full' : 'w-0'
                    }`}
                    style={{ backgroundColor: '#ff5e3a' }}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-navy-600 bg-gray-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm overflow-hidden p-2 ${
                darkMode
                  ? 'bg-gray-800 hover:bg-gray-600'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              <img
                src={lang === 'en' ? ukflag : jpflag}
                alt={lang === 'en' ? 'UK Flag' : 'Japan Flag'}
                className="w-full h-full object-contain"
              />
            </button>
          </div>

          {/* Mobile Right Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle dark mode"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                darkMode
                  ? 'bg-gray-800 text-white hover:bg-gray-600'
                  : 'bg-gray-100 text-navy-600 hover:bg-gray-200'
              }`}
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleLanguage}
              aria-label="Switch language"
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors shadow-sm overflow-hidden p-2 ${
                darkMode ? 'bg-gray-800' : 'bg-gray-100'
              }`}
            >
              <img
                src={lang === 'en' ? ukflag : jpflag}
                alt={lang === 'en' ? 'UK Flag' : 'Japan Flag'}
                className="w-full h-full object-contain"
              />
            </button>

            <button
              className="flex flex-col justify-center items-center gap-1.5 w-10 h-10"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((v) => !v)}
            >
              <span className={`block h-0.5 w-6 transition-transform ${darkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-6 transition-opacity ${darkMode ? 'bg-white' : 'bg-black'} ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`block h-0.5 w-6 transition-transform ${darkMode ? 'bg-white' : 'bg-black'} ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${
          darkMode ? 'bg-gray-800 border-gray-800' : 'bg-white border-gray-100'
        } border-t ${isOpen ? 'max-h-[85vh] overflow-y-auto' : 'max-h-0'}`}
      >
        <ul className="flex flex-col px-5 py-3">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`block py-3 font-medium text-sm border-b ${
                  darkMode ? 'border-gray-800' : 'border-gray-100'
                } last:border-none ${
                  active === link.href
                    ? darkMode
                      ? 'text-[#ff5e3a]'
                      : 'text-navy-600'
                    : darkMode
                    ? 'text-gray-300'
                    : 'text-black'
                }`}
              >
                {getLabel(link.label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}