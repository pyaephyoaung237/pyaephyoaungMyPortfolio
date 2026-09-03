import { useEffect, useState } from 'react'
import { profile } from '../data'
import Typewriter from './Typewriter'
import { FileText, Sparkles } from 'lucide-react'

export default function Hero({ darkMode, lang }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window
      setMousePos({
        x: (e.clientX / innerWidth) * 2 - 1,
        y: (e.clientY / innerHeight) * 2 - 1,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center pt-28 pb-16 px-5 md:px-10 overflow-hidden transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-slate-900'
        }`}
    >
      {/* Inline styles for modern glowing orbs, floating animations, and shooting stars */}
      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(-15px) translateX(10px) rotate(3deg); }
        }
        @keyframes floatDelayed {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          50% { transform: translateY(20px) translateX(-12px) rotate(-3deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.15); }
        }
        @keyframes shootingStar {
          0% { transform: translateX(0) translateY(0) rotate(-45deg); opacity: 1; }
          100% { transform: translateX(-500px) translateY(500px) rotate(-45deg); opacity: 0; }
        }
        .animate-float-slow {
          animation: floatSlow 9s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: floatDelayed 11s ease-in-out infinite;
        }
        .animate-pulse-glow {
          animation: pulseGlow 6s ease-in-out infinite;
        }
        .shooting-star-1 {
          animation: shootingStar 4s linear infinite;
        }
        .shooting-star-2 {
          animation: shootingStar 6s linear infinite 2s;
        }
      `}</style>

      {/* Modern Portfolio Background: Glowing Nebula Orbs + Parallax Constellation Network */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center">
        {/* Ambient Nebula Glows */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] transition-transform duration-700 ease-out animate-pulse-glow"
          style={{
            background: darkMode ? 'rgba(255, 94, 58, 0.12)' : 'rgba(255, 94, 58, 0.08)',
            top: '15%',
            left: '20%',
            transform: `translate(${mousePos.x * -25}px, ${mousePos.y * -25}px)`,
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[140px] transition-transform duration-700 ease-out animate-pulse-glow"
          style={{
            background: darkMode ? 'rgba(59, 130, 246, 0.1)' : 'rgba(59, 130, 246, 0.06)',
            bottom: '10%',
            right: '15%',
            transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
          }}
        />

        {/* Interactive Parallax Constellation SVG Network */}
        <div
          className="absolute w-full max-w-6xl h-full flex items-center justify-center opacity-50 dark:opacity-75 transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePos.x * -15}px, ${mousePos.y * -15}px)`,
          }}
        >
          <svg
            className="w-full h-full text-blue-400/30 dark:text-blue-400/25"
            viewBox="0 0 1000 700"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Geometric Constellation Connection Lines */}
            <g stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5">
              <line x1="150" y1="180" x2="280" y2="120" className="animate-float-slow" />
              <line x1="280" y1="120" x2="420" y2="200" />
              <line x1="420" y1="200" x2="350" y2="320" />
              <line x1="350" y1="320" x2="180" y2="280" className="animate-float-delayed" />
              <line x1="150" y1="180" x2="180" y2="280" />

              <line x1="650" y1="150" x2="820" y2="220" />
              <line x1="820" y1="220" x2="750" y2="380" className="animate-float-slow" />
              <line x1="750" y1="380" x2="580" y2="320" />
              <line x1="580" y1="320" x2="650" y2="150" className="animate-float-delayed" />

              <line x1="420" y1="200" x2="580" y2="320" strokeDasharray="4 4" />
              <line x1="350" y1="320" x2="480" y2="500" />
              <line x1="750" y1="380" x2="850" y2="550" className="animate-float-slow" />
              <line x1="280" y1="520" x2="480" y2="500" />
            </g>

            {/* Glowing Constellation Nodes / Vertex Stars */}
            <g fill={darkMode ? '#93c5fd' : '#3b82f6'}>
              <circle cx="150" cy="180" r="3" className="animate-pulse" />
              <circle cx="280" cy="120" r="4" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="280" cy="120" r="2.5" />
              <circle cx="420" cy="200" r="3.5" />
              <circle cx="350" cy="320" r="2" />
              <circle cx="180" cy="280" r="3" />
              <circle cx="650" cy="150" r="2.5" />
              <circle cx="820" cy="220" r="4" />
              <circle cx="750" cy="380" r="3" />
              <circle cx="580" cy="320" r="2.5" />
              <circle cx="480" cy="500" r="3.5" />
              <circle cx="850" cy="550" r="2" />
              <circle cx="280" cy="520" r="3" />
            </g>

            {/* Accent Coral/Orange Star Nodes (#ff5e3a) */}
            <g fill="#ff5e3a">
              <circle cx="420" cy="200" r="2" className="animate-pulse" />
              <circle cx="580" cy="320" r="2.5" />
              <circle cx="350" cy="320" r="2" />
              <circle cx="750" cy="380" r="2.2" />
            </g>

            {/* Ambient Background Starfield Dust */}
            <g fill={darkMode ? '#ffffff' : '#64748b'}>
              <circle cx="100" cy="100" r="1" opacity="0.6" />
              <circle cx="900" cy="120" r="1.2" opacity="0.8" />
              <circle cx="850" cy="100" r="0.8" opacity="0.5" />
              <circle cx="200" cy="600" r="1.5" opacity="0.7" />
              <circle cx="700" cy="620" r="1" opacity="0.4" />
              <circle cx="500" cy="100" r="1.2" opacity="0.9" />
              <circle cx="50" cy="400" r="0.9" opacity="0.5" />
              <circle cx="950" cy="450" r="1.3" opacity="0.6" />
            </g>

            {/* Dynamic Shooting Stars */}
            <g className="shooting-star-1" style={{ transformOrigin: '750px 150px' }}>
              <path d="M 750 150 L 710 190" stroke="url(#shootingStarGrad)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="750" cy="150" r="1.5" fill="#ffffff" />
            </g>
            <g className="shooting-star-2" style={{ transformOrigin: '400px 80px' }}>
              <path d="M 400 80 L 360 120" stroke="url(#shootingStarGrad)" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="400" cy="80" r="1.5" fill="#ffffff" />
            </g>

            <defs>
              <linearGradient id="shootingStarGrad" x1="750" y1="150" x2="710" y2="190" gradientUnits="userSpaceOnUse">
                <stop stopColor="#ffffff" stopOpacity="1" />
                <stop offset="1" stopColor="#3b82f6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">

        {/* Left Side: Profile Image / Visual Showcase */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-none">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

            {/* Decorative Orbiting Rings */}
            <div className="absolute inset-0 rounded-full border border-dashed border-[#ff5e3a]/30 animate-spin" style={{ animationDuration: '25s' }} />
            <div className="absolute -inset-4 rounded-full border border-blue-500/20 animate-spin" style={{ animationDuration: '35s', animationDirection: 'reverse' }} />

            {/* Backdrop Glow Ring with Adjusted Opacity/Shadow for Light Mode */}
            <div
              className={`absolute inset-0 rounded-full blur-xl animate-pulse-glow ${
                darkMode ? 'opacity-60' : 'opacity-40 shadow-2xl'
              }`}
              style={{ background: 'linear-gradient(135deg, #ff5e3a 0%, #3b82f6 100%)' }}
            />

            {/* Profile Picture Container with Enhanced Light-Mode Shadow */}
            <div className={`relative w-full h-full rounded-full p-2.5 overflow-hidden backdrop-blur-md ${
              darkMode 
                ? 'bg-gray-900/90 border border-gray-800 shadow-2xl' 
                : 'bg-white border border-slate-200 shadow-xl shadow-slate-300/60'
            }`}>
              <img
                src={profile.profileImage}
                alt="Profile"
                className="w-full h-full object-cover rounded-full filter  "
              />
            </div>

          </div>
        </div>

        {/* Right Side: Text and Actions */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-none">

          {/* Greeting & Name */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-2 leading-tight">
            {lang === 'jp'
              ? (() => {
                const hour = new Date().getHours()
                if (hour >= 5 && hour < 12) return 'おはようございます、'
                if (hour >= 12 && hour < 18) return 'こんにちは、'
                return 'こんばんは、'
              })()
              : 'Hello,'}
          </h1>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4 leading-tight">
            {lang === 'jp' ? (
              <>
                <span style={{ color: '#ff5e3a' }}>ピィエピョーアウン
                </span> です
              </>
            ) : (
              <>
                I'm <span style={{ color: '#ff5e3a' }}>{profile.name}</span>
              </>
            )}
          </h2>

          {/* Typewriter Role Description */}
          <p className={`text-base sm:text-lg md:text-xl font-medium mb-6 max-w-2xl ${darkMode ? 'text-gray-300' : 'text-slate-600'
            }`}>
            {lang === 'jp' ? '以下の経験があります: ' : 'Have Experience In '}
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              <Typewriter roles={profile.rolesList} />
            </span>
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <a
              href="#about"
              className="px-6 py-3 rounded-xl font-semibold text-white shadow-lg transition-all duration-300 hover:opacity-90 hover:scale-[1.02] flex items-center gap-2"
              style={{ backgroundColor: '#ff5e3a' }}
            >
              {lang === 'jp' ? '私について' : 'About Me'}
              <span aria-hidden>↓</span>
            </a>
            <a
              href="#contact"
              className={`px-6 py-3 rounded-xl font-semibold border transition-all duration-300 hover:scale-[1.02] flex items-center gap-2 ${darkMode
                  ? 'border-gray-700 bg-gray-900/60 text-gray-200 hover:bg-gray-800'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100 shadow-sm'
                }`}
            >
              <FileText className="w-4 h-4" />
              {lang === 'jp' ? 'お問い合わせ' : 'Get in Touch'}
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex items-center gap-4">
            
            <div className="flex items-center gap-3">
              {profile.socials.map((s) => {
                let iconSvg = null
                if (s.label === 'LinkedIn') {
                  iconSvg = (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )
                } else if (s.label === 'GitHub') {
                  iconSvg = (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  )
                } else if (s.label === 'Twitter') {
                  iconSvg = (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )
                } else {
                  iconSvg = (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.623-5.929h20l-10 8.125-10-8.125zm20 11.458l-4.633-5.731-3.367 2.733-3.367-2.733-4.633 5.731h16zm-20-10.729l4.623 3.746-4.623 3.746v-7.492z" />
                    </svg>
                  )
                }

                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm ${darkMode ? 'bg-gray-900 border border-gray-800 text-gray-200 hover:text-[#ff5e3a]' : 'bg-white border border-slate-200 text-slate-700 hover:text-[#ff5e3a] shadow-sm'
                      }`}
                  >
                    {iconSvg}
                  </a>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}