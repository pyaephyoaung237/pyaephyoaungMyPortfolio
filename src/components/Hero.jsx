import { profile } from '../data'
import Typewriter from './Typewriter'

export default function Hero({ darkMode, lang }) {
  return (
    <section
      id="home"
      className={`relative pt-32 md:pt-40 md:pb-28 px-5 md:px-10 overflow-hidden transition-colors ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
        }`}
    >
      {/* Inline styles for twinkling star shine animations */}
      <style>{`
        @keyframes starTwinkle1 {
          0%, 100% { opacity: 0.15; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @keyframes starTwinkle2 {
          0%, 100% { opacity: 1; transform: scale(1.3); }
          50% { opacity: 0.2; transform: scale(0.7); }
        }
        @keyframes starTwinkle3 {
          0%, 50%, 100% { opacity: 0.3; transform: scale(1); }
          25%, 75% { opacity: 1.2; transform: scale(1.5); }
        }
        .twinkle-star-1 {
          animation: starTwinkle1 2.8s ease-in-out infinite;
          transform-origin: center;
        }
        .twinkle-star-2 {
          animation: starTwinkle2 3.5s ease-in-out infinite;
          transform-origin: center;
        }
        .twinkle-star-3 {
          animation: starTwinkle3 2.2s ease-in-out infinite;
          transform-origin: center;
        }
      `}</style>

      {/* Animated Zodiac & Celestial Star Map Background */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Image / Profile Initial Circle */}
        <div className="flex justify-center md:justify-start">
          <div className={`w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full border-4 overflow-hidden flex items-center justify-center ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-navy-50 border-navy-600'
            }`}>
            <img
              src={profile.profileImage}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>

        {/* Right Side: Text and Actions */}
        <div>
          <p className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight ${darkMode ? 'text-white' : 'text-black'
            }`}>
            {lang === 'jp'
              ? (() => {
                const hour = new Date().getHours()
                if (hour >= 5 && hour < 12) return 'おはようございます、' // Morning (5 AM - 12 PM)
                if (hour >= 12 && hour < 18) return 'こんにちは、'     // Afternoon (12 PM - 6 PM)
                return 'こんばんは、'                             // Evening/Night (6 PM - 5 AM)
              })()
              : 'Hello,'}
          </p>
          <p className={`font-display font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mt-1 ${darkMode ? 'text-white' : 'text-black'
            }`}>
            {lang === 'jp' ? (
              <><span className="text-amber-500">ピィエピョーアウン</span> です</>
            ) : (
              <>I'm <span className="text-amber-500">{profile.name}</span></>
            )}
          </p>
          <p className={`mt-5 md:text-lg ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
            {lang === 'jp' ? '以下の経験があります: ' : 'Have Experience In '}
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-navy-700'}`}>
              <Typewriter roles={profile.rolesList} />
            </span>
          </p>

          <a
            href="#about"
            className="inline-flex items-center gap-2 mt-8 bg-navy-600 hover:bg-navy-700 text-white font-medium px-6 py-3 rounded-full transition-colors"
          >
            {lang === 'jp' ? '私について' : 'About Me'}
            <span aria-hidden>↓</span>
          </a>

          <div className="flex gap-3 mt-8">
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
                  className="w-10 h-10 flex items-center justify-center rounded-full text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#ff5e3a' }}
                >
                  {iconSvg}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}