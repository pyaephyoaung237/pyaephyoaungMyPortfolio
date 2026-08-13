import { education } from '../data'
import useScrollAnimation from '../hooks/useScrollAnimation'

function EducationCard({ item, index }) {
  const fromSide = index % 2 === 0 ? 'reveal-left' : 'reveal-right'
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`${fromSide} ${isVisible ? 'is-visible' : ''} grid sm:grid-cols-[200px_1fr] gap-6 bg-white border border-gray-200 rounded-xl p-6 shadow-sm`}
    >
      <div className="w-full h-40 sm:h-full rounded-lg bg-navy-50 flex items-center justify-center overflow-hidden">
        <img
          src={item.image}
          alt={item.school}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="font-display font-semibold text-lg md:text-xl text-navy-600">{item.degree}</h3>
        <p className="text-sm text-gray-700 mt-1 leading-relaxed">
          {item.major}
        </p>
        <p className="text-sm text-gray-700">{item.school}</p>

        <p className="text-sm font-semibold text-black mt-3">Milestones</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5 mt-1">
          {item.milestones.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>

        <p className="mt-4 inline-block text-xs font-semibold uppercase tracking-wide bg-navy-600 text-white px-3 py-1 rounded-full">
          {item.period} · {item.status}
        </p>
      </div>
    </div>
  )
}

export default function Education() {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.4 })

  return (
    <section id="education" className="bg-gray-50 py-10 px-5 md:px-10">
      <div className="max-w-5xl mx-auto">
        <div ref={headingRef} className={`reveal ${headingVisible ? 'is-visible' : ''} text-center mb-4`}>
          <h2 className="text-center font-display font-bold text-2xl md:text-3xl text-black mb-12 relative pb-4">
            <span className="text-navy-600">Education</span>
            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
              style={{ backgroundColor: '#ff5e3a' }}
            ></span>
          </h2>
          <p className="text-gray-900 mt-2">
            Education is a journey of learning, growing, and developing the skills to build a better future.
          </p>
        </div>

        <div className="mt-10 space-y-6">
          {education.map((item, i) => (
            <EducationCard key={item.degree} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}