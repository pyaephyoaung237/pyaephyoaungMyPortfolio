import { useEffect, useRef, useState } from 'react'
import { experience } from '../data'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { Briefcase } from 'lucide-react'

function ExperienceItem({ item, index }) {
  const isLeft = index % 2 === 0
  const fromSide = isLeft ? 'reveal-left' : 'reveal-right'
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.25 })

  return (
    <div className="relative grid grid-cols-2 gap-4 md:gap-0 items-center">
      {/* left slot */}
      <div className={`pr-6 md:pr-12 ${isLeft ? '' : 'order-2 pl-6 pr-0 md:pl-12 md:pr-0'}`}>
        <div
          ref={ref}
          className={`${fromSide} ${isVisible ? 'is-visible' : ''} bg-navy-600 text-white rounded-xl p-4 md:px-6 md:py-5 shadow-md`}
        >
          <div className="flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 shrink-0" style={{ color: '#ff5e3a' }} />
            <h3 className="font-display font-semibold text-base md:text-lg">{item.company}</h3>
          </div>
          <p className="text-xs md:text-sm text-white/90 mt-1">{item.role}</p>
          <p className="text-[11px] md:text-xs text-white/70 mt-2">{item.place}</p>
          <p className="text-[11px] md:text-xs text-white/70">{item.period}</p>
        </div>
      </div>

      {/* timeline dot, center for both mobile and desktop */}
      <div className="flex absolute left-1/2 -translate-x-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full bg-white border-2 border-navy-600 items-center justify-center z-10">
        <span className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-navy-600" />
      </div>

      <div className={`${isLeft ? 'order-2' : ''}`} />
    </div>
  )
}

export default function Experience() {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.4 })
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
    <section id="experience" ref={containerRef} className="bg-white py-10 px-5 md:px-10">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={headingRef}
          className={`reveal ${headingVisible ? 'is-visible' : ''} text-center font-display font-bold text-2xl md:text-3xl text-black mb-16 relative pb-4 inline-block w-full`}
        >
          <span className="text-navy-600">Experience</span>
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
            style={{ backgroundColor: '#ff5e3a' }}
          ></span>
        </h2>

        <div className="relative">
          {/* Base Background Line (Navy) */}
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-navy-600" />

          {/* Active Animated Progress Line (#ff5e3a) */}
          <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 transition-all duration-100 ease-out z-10"
            style={{ 
              height: `${scrollProgress}%`, 
              backgroundColor: '#ff5e3a' 
            }}
          />

          <div className="space-y-10 md:space-y-16">
            {experience.map((item, i) => (
              <ExperienceItem key={item.company + item.period} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}