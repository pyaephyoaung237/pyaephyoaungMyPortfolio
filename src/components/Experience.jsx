import { useEffect, useRef, useState } from 'react'
import { experience } from '../data'
import { Briefcase, Building2 } from 'lucide-react'

function ExperienceItem({ item, index, darkMode, lang }) {
  const isLeft = index % 2 === 0

  return (
    <div className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-0 items-center">
      {/* Content slot */}
      <div className={`md:pr-12 ${isLeft ? '' : 'md:order-2 md:pl-12 md:pr-0'}`}>
        <div
          className={`${
            darkMode ? 'bg-gray-800/90 border border-gray-700 text-gray-100' : 'bg-navy-600 text-white'
          } rounded-xl p-4 md:px-6 md:py-5 shadow-md`}
        >
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />
            <h3 className="font-display font-semibold text-base md:text-lg">
              {lang === 'jp' && item.companyJp ? item.companyJp : item.company}
            </h3>
          </div>
          <p className={`text-xs md:text-sm mt-1 ${darkMode ? 'text-gray-300' : 'text-white/90'}`}>
            {lang === 'jp' && item.roleJp ? item.roleJp : item.role}
          </p>
          <p className={`text-[11px] md:text-xs mt-2 ${darkMode ? 'text-gray-400' : 'text-white/70'}`}>
            {lang === 'jp' && item.placeJp ? item.placeJp : item.place}
          </p>
          <p className={`text-[11px] md:text-xs ${darkMode ? 'text-gray-400' : 'text-white/70'}`}>
            {item.period}
          </p>
        </div>
      </div>

      {/* Timeline dot: left-aligned on mobile, centered on desktop */}
      <div className={`flex absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 items-center justify-center z-10 ${
        darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-navy-600'
      }`}>
        <span className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
          darkMode ? 'bg-[#ff5e3a]' : 'bg-navy-600'
        }`} />
      </div>

      <div className={`hidden md:block ${isLeft ? 'order-2' : ''}`} />
    </div>
  )
}

export default function Experience({ darkMode, lang }) {
  const containerRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight

      const totalHeight = rect.height - windowHeight / 2
      const currentScroll = windowHeight / 2 - rect.top

      let progress = (currentScroll / totalHeight) * 100
      progress = Math.max(0, Math.min(100, progress))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="experience" 
      ref={containerRef} 
      className={`py-10 px-5 md:px-10 transition-colors ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Title with Building2 icon in front */}
        <div className="text-center mb-5">
          <h2
            className={`relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            <span className="inline-flex items-center justify-center gap-2.5">
              <Building2 className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
              <span className={darkMode ? 'text-white' : 'text-navy-600'}>
                {lang === 'jp' ? '経歴' : 'Experience'}
              </span>
            </span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
              style={{ backgroundColor: '#ff5e3a' }}
            ></span>
          </h2>
        </div>

        <div className="relative">
          {/* Base Background Line */}
          <div className={`absolute top-0 bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-1.5 ${
            darkMode ? 'bg-gray-700' : 'bg-navy-600'
          }`} />

          {/* Active Animated Progress Line */}
          <div 
            className="absolute top-0 left-4 md:left-1/2 -translate-x-1/2 w-1.5 transition-all duration-75 ease-out z-10"
            style={{ 
              height: `${scrollProgress}%`, 
              backgroundColor: '#ff5e3a' 
            }}
          />

          <div className="space-y-10 md:space-y-16">
            {experience.map((item, i) => (
              <ExperienceItem 
                key={item.company + item.period} 
                item={item} 
                index={i} 
                darkMode={darkMode}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}