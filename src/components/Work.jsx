import { useState } from 'react'
import { work } from '../data'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { FaArrowLeft, FaExternalLinkAlt, FaCode, FaCheckCircle, FaLayerGroup, FaImage } from 'react-icons/fa'

function WorkCard({ item, index, onViewProject }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'is-visible' : ''} group relative bg-white border-2 border-navy-600 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      {/* Top Banner Area with Image or Initial fallback */}
      <div className="h-44 bg-navy-50 flex items-center justify-center relative overflow-hidden">
        {item.image ? (
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
          />
        ) : (
          <span className="text-navy-600 font-display font-bold text-5xl opacity-40 group-hover:scale-110 transition-transform duration-300">
            {item.title.slice(0, 1)}
          </span>
        )}

        {/* Hover Overlay with View Button */}
        <div className="absolute inset-0 bg-navy-900/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewProject(item)}
            className="px-5 py-2.5 bg-white text-navy-600 font-semibold rounded-lg shadow-md hover:bg-navy-600 hover:text-white transition-colors duration-300 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0"
          >
            <span>View Project</span>
            <FaExternalLinkAlt className="text-xs" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-navy-600 px-5 py-4 flex-1 flex flex-col justify-between">
        <div>
          <p className="text-white font-bold text-lg">{item.title}</p>
          <p className="text-navy-100/80 text-xs mt-1">{item.tag}</p>
        </div>

        {/* Language/Tech Badges */}
        <div className="mt-4 pt-3 border-t border-navy-500 flex flex-wrap gap-1.5">
          {item.languages?.map((lang, idx) => (
            <span key={idx} className="text-[11px] bg-navy-700 text-navy-100 px-2 py-0.5 rounded-md flex items-center gap-1">
              <FaCode className="text-[9px]" style={{ color: '#ff5e3a' }} />
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectDetailView({ project, onBack }) {
  return (
    <div className="max-w-4xl mx-auto bg-white border-2 border-navy-600 rounded-2xl p-6 md:p-10 shadow-lg">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="mb-8 px-4 py-2 bg-navy-600 text-white rounded-lg font-medium text-sm flex items-center gap-2 hover:bg-black transition-colors"
      >
        <FaArrowLeft />
        <span>Back to Projects</span>
      </button>

      {/* Project Title & Tag */}
      <div className="mb-6 pb-4 border-b-2 border-navy-600 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-navy-600">{project.title}</h3>
          <p className="text-gray-600 text-sm mt-1">{project.tag}</p>
        </div>
        <span className="self-start sm:self-auto px-3 py-1 bg-navy-50 text-navy-600 border border-navy-600 text-xs font-semibold rounded-full">
          {project.category}
        </span>
      </div>

      {/* Project Image Display */}
      <div className="mb-8 rounded-xl overflow-hidden border-2 border-navy-600 bg-gray-50">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 md:h-96 object-cover" 
          />
        ) : (
          <div className="w-full h-48 flex flex-col items-center justify-center text-gray-400 gap-2">
            <FaImage className="text-4xl text-navy-300" />
            <span className="text-sm font-medium">No Image Available</span>
          </div>
        )}
      </div>

      {/* System Overview */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <FaLayerGroup style={{ color: '#ff5e3a' }} />
          System Overview
        </h4>
        <p className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-xl border border-gray-200">
          {project.overview}
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-8">
        <h4 className="text-lg font-bold text-black mb-4 flex items-center gap-2">
          <FaCheckCircle style={{ color: '#ff5e3a' }} />
          Key Features
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {project.keyFeatures.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-navy-50/50 rounded-xl border border-navy-100">
              <span className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#ff5e3a' }}></span>
              <span className="text-sm text-gray-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies Used */}
      <div>
        <h4 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
          <FaCode style={{ color: '#ff5e3a' }} />
          Technologies & Tools
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.languages.map((lang, index) => (
            <span key={index} className="px-3 py-1 bg-navy-600 text-white text-xs font-medium rounded-lg">
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.4 })
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="work" className="bg-white py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h2
          ref={headingRef}
          className={`reveal ${headingVisible ? 'is-visible' : ''} text-center font-display font-bold text-2xl md:text-3xl text-black mb-12 relative pb-4`}
        >
          <span className="text-navy-600">My Projects</span>
          <span 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full" 
            style={{ backgroundColor: '#ff5e3a' }}
          ></span>
        </h2>

        {selectedProject ? (
          <ProjectDetailView project={selectedProject} onBack={() => setSelectedProject(null)} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {work.map((item, i) => (
              <WorkCard 
                key={item.title} 
                item={item} 
                index={i} 
                onViewProject={(proj) => setSelectedProject(proj)} 
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}