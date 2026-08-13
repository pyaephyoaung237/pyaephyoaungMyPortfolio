import { useState } from 'react'
import { achievements } from '../data'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { Eye, X } from 'lucide-react'

function AchievementCard({ item, index, onViewImage }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`reveal-scale ${isVisible ? 'is-visible' : ''} bg-white border border-gray-200 rounded-xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <div className="h-56 flex items-center justify-center bg-gray-50 overflow-hidden relative">
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
          <span className="text-navy-600 font-display font-bold text-3xl">🏆</span>
        )}
      </div>
      <div className="px-4 py-4 bg-white">
        <p className="text-navy-600 font-semibold text-sm">{item.title}</p>
        <div className="flex items-center justify-between mt-1">
          <p className="text-gray-600 text-xs">{item.org}</p>
          {item.date && (
            <span className="text-[11px] text-gray-700 px-2 py-0.5 rounded bg-gray-100 font-medium">
              {item.date}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Achievement() {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.4 })
  const [modalImage, setModalImage] = useState(null)

  return (
    <section id="achievement" className="py-10 px-5 md:px-10 relative ">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''} text-center mb-4`}>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-600 relative pb-4 inline-block">
             <span className="text-navy-600">Achievement</span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
              style={{ backgroundColor: '#ff5e3a' }}
            ></span>
          </h2>
          <p className="text-gray-600 text-sm mt-2">Comfort is the enemy of achievement.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {achievements.map((item, i) => (
            <AchievementCard 
              key={item.title} 
              item={item} 
              index={i} 
              onViewImage={(img) => setModalImage(img)} 
            />
          ))}
        </div>
      </div>

      {/* Full Image Modal with Clean White Background */}
      {modalImage && (
        <div className="fixed inset-0 z-50 bg-white/20 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden p-4 border border-gray-200 shadow-2xl">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-gray-100 text-gray-700 flex items-center justify-center hover:bg-gray-200 transition-colors shadow-sm"
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