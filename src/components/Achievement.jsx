import { useState } from 'react'
import { achievements } from '../data'
import { Eye, X } from 'lucide-react'
import { Award } from 'lucide-react'

function AchievementCard({ item, index, onViewImage, darkMode, lang }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden group shadow-sm transition-all duration-300 flex flex-col ${
        darkMode 
          ? 'bg-gray-800/80 border-gray-700' 
          : 'bg-white border-gray-200 hover:shadow-md'
      }`}
    >
      <div className={`h-56 flex items-center justify-center overflow-hidden relative ${
        darkMode ? 'bg-gray-900/50' : 'bg-gray-50'
      }`}>
        {item.image ? (
          <>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
            />
            {/* View Icon Overlay */}
            <button
              onClick={() => onViewImage(item.image, item.title)}
              className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white"
              title="View Full Image"
            >
              <div className="w-10 h-10 rounded-full bg-white text-navy-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                <Eye className="w-5 h-5" />
              </div>
            </button>
          </>
        ) : (
          <span className="text-3xl">🏆</span>
        )}
      </div>
      <div className={`px-4 py-4 flex-1 flex flex-col justify-between ${darkMode ? 'bg-gray-800/80' : 'bg-white'}`}>
        <div>
          <p className={`font-semibold text-sm ${darkMode ? 'text-gray-100' : 'text-navy-600'}`}>
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

      {/* Full Image Modal with Dark/Light Support */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className={`relative max-w-4xl w-full rounded-2xl overflow-hidden p-4 shadow-2xl transition-colors ${
            darkMode ? 'bg-gray-800 border border-gray-700 text-white' : 'bg-white border border-gray-200 text-black'
          }`}>
            <button
              onClick={() => setModalImage(null)}
              className={`absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                darkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-center max-h-[80vh] overflow-hidden rounded-xl pt-6">
              <img
                src={modalImage}
                alt="Achievement Full View"
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}