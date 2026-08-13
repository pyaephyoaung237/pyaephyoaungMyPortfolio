import { achievements } from '../data'
import useScrollAnimation from '../hooks/useScrollAnimation'

function AchievementCard({ item, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`reveal-scale ${isVisible ? 'is-visible' : ''} bg-navy-700 border border-navy-500/40 rounded-xl overflow-hidden`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      <div className="h-32 flex items-center justify-center bg-navy-800">
        <span className="text-white/90 font-display font-bold text-3xl">🏆</span>
      </div>
      <div className="px-4 py-4">
        <p className="text-white font-semibold text-sm">{item.title}</p>
        <p className="text-navy-200 text-xs mt-1">{item.org}</p>
      </div>
    </div>
  )
}

export default function Achievement() {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.4 })

  return (
    <section id="achievement" className=" py-20 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''} text-center mb-4`}>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-navy-600">
            My <span className="text-navy-800">Achievement</span>
          </h2>
          <p className="text-navy-500 text-sm mt-2">Comfort is the enemy of achievement.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5 mt-10">
          {achievements.map((item, i) => (
            <AchievementCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
