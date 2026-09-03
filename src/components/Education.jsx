import { education } from '../data'
import { GraduationCap } from 'lucide-react'

function EducationCard({ item, darkMode, lang }) {
  return (
    <div
      className={`grid sm:grid-cols-[200px_1fr] gap-6 border rounded-xl p-6 shadow-sm transition-colors ${
        darkMode 
          ? 'bg-gray-800/80 border-gray-700 text-gray-100' 
          : 'bg-gray-50 border-gray-200 text-black'
      }`}
    >
      <div className={`w-full h-40 sm:h-full rounded-lg flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-gray-900/50' : 'bg-navy-50'
      }`}>
        <img
          src={item.image}
          alt={item.school}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className={`font-display font-semibold text-lg md:text-xl ${
          darkMode ? 'text-white' : 'text-navy-600'
        }`}>
          {lang === 'jp' && item.degreeJp ? item.degreeJp : item.degree}
        </h3>
        
        <p className={`text-sm mt-1 leading-relaxed ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {lang === 'jp' && item.majorJp ? item.majorJp : item.major}
        </p>

        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          {lang === 'jp' && item.schoolJp ? item.schoolJp : item.school}
        </p>

        <p className={`text-sm font-semibold mt-3 ${
          darkMode ? 'text-gray-200' : 'text-black'
        }`}>
          {lang === 'jp' ? 'マイルストーン' : 'Milestones'}
        </p>

        <ul className={`list-disc list-inside text-sm space-y-0.5 mt-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {(lang === 'jp' && item.milestonesJp ? item.milestonesJp : item.milestones)?.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <p className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide bg-navy-500 text-white px-3 py-1 rounded-full">
          {item.period} · {lang === 'jp' && item.statusJp ? item.statusJp : item.status}
        </p>
      </div>
    </div>
  )
}

export default function Education({ darkMode, lang }) {
  return (
    <section 
      id="education" 
      className={`py-10 px-5 md:px-10 transition-colors ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          {/* Title with GraduationCap icon in front */}
          <div className="text-center mb-1">
            <h2 className={`relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              <span className="inline-flex items-center justify-center gap-2.5">
                <GraduationCap className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
                <span className={darkMode ? 'text-white' : 'text-navy-600'}>
                  {lang === 'jp' ? '学歴' : 'Education'}
                </span>
              </span>
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
                style={{ backgroundColor: '#ff5e3a' }}
              ></span>
            </h2>
          </div>

          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
            {lang === 'jp' 
              ? '教育は、より良い未来を築くためのスキルを学び、成長し、発展させる旅です。' 
              : 'Education is a journey of learning, growing, and developing the skills to build a better future.'}
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {education.map((item, i) => (
            <EducationCard 
              key={item.degree} 
              item={item} 
              index={i} 
              darkMode={darkMode}
              lang={lang}
            />
          ))}
        </div>
      </div>
    </section>
  )
}