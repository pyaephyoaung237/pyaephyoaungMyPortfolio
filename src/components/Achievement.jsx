import { useState } from 'react'
import { achievements } from '../data'
import { Award } from 'lucide-react'

function AchievementCard({ item, index, onViewImage, darkMode, lang }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden group shadow-sm transition-all duration-300 flex flex-col ${
        darkMode 
          ? 'bg-gray-800/80 border-gray-700 hover:border-gray-600' 
          : 'bg-white border-gray-200 hover:shadow-md'
      }`}
    >
      <div 
        onClick={() => item.image && onViewImage(item.image, item.title)}
        className={`h-56 flex items-center justify-center overflow-hidden relative cursor-pointer ${
          darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
        }`}
      >
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-3xl">🏆</span>
        )}
      </div>
      <div className={`px-4 py-4 flex-1 flex flex-col justify-between ${darkMode ? 'bg-gray-800/80' : 'bg-white'}`}>
        <div>
          <p className={`font-semibold text-sm transition-colors duration-200 ${
            darkMode ? 'text-gray-100 group-hover:text-gray-300' : 'text-navy-600'
          }`}>
            {lang === 'jp' && item.titleJp ? item.titleJp : item.title}
          </p>
        </div>
        <div className="flex items-center justify-between mt-3">
          <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {lang === 'jp' && item.orgJp ? item.orgJp : item.org}
          </p>
          {item.date && (
            <span className={`text-[11px] px-2 py-0.5 rounded font-medium ${
              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
            }`}>
              {item.date}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Achievement({ darkMode, lang }) {
  const [modalImage, setModalImage] = useState(null)

  return (
    <section 
      id="achievement" 
      className={`py-10 px-5 md:px-10 relative transition-colors ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-4">
          {/* Title with Award icon in front */}
          <div className="text-center mb-2">
            <h2 className={`relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl ${
              darkMode ? 'text-white' : 'text-black'
            }`}>
              <span className="inline-flex items-center justify-center gap-2.5">
                <Award className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
                <span className={darkMode ? 'text-white' : 'text-navy-600'}>
                  {lang === 'jp' ? '実績' : 'Achievement'}
                </span>
              </span>
              <span
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
                style={{ backgroundColor: '#ff5e3a' }}
              ></span>
            </h2>
          </div>
          <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-navy-600'}`}>
            {lang === 'jp' ? '挑戦なくして成功なし。' : 'No achievement comes without challenges.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {achievements.map((item, i) => (
            <AchievementCard 
              key={item.title} 
              item={item} 
              index={i} 
              onViewImage={(img) => setModalImage(img)} 
              darkMode={darkMode}
              lang={lang}
            />
          ))}
        </div>
      </div>

      {/* Full Image Modal - Clean Image Only */}
      {modalImage && (
        <div 
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-black/30  flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] flex items-center justify-center">
            <img
              src={modalImage}
              alt="Achievement Full View"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}