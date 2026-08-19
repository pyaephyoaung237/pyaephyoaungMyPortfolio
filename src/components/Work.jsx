import { useState } from 'react'
import { work } from '../data'
import useScrollAnimation from '../hooks/useScrollAnimation'
import {
  FaExternalLinkAlt,
  FaCode,
  FaCheckCircle,
  FaLayerGroup,
  FaTimes,
} from 'react-icons/fa'
import { FolderGit2 } from 'lucide-react'

function WorkCard({ item, index, onViewProject }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })

  return (
    <div
      ref={ref}
      className={`reveal ${
        isVisible ? 'is-visible' : ''
      } group relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      {/* Top Banner Area */}
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

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewProject(item)}
            className="px-5 py-2.5 bg-white text-navy-600 font-semibold rounded-lg shadow-md hover:bg-navy-600 hover:text-white transition-colors duration-300 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0"
          >
            <span>Project Details</span>
            <FaExternalLinkAlt className="text-xs" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white px-5 py-4 flex-1 flex flex-col justify-between border-t border-gray-100">
        <div>
          <p className="text-navy-600 font-bold text-lg">
            {item.title}
          </p>

          <p className="text-gray-600 text-xs mt-1">
            {item.tag}
          </p>
        </div>

        {/* Language / Tech Badges */}
        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5">
          {item.languages?.map((lang, idx) => (
            <span
              key={idx}
              className="text-[11px] bg-gray-100 text-navy-600 px-2 py-0.5 rounded-md flex items-center gap-1 font-medium"
            >
              <FaCode
                className="text-[9px]"
                style={{ color: '#ff5e3a' }}
              />
              {lang}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectDetailModal({ project, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/20 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className="relative w-[92%] sm:w-full max-w-2xl bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl max-h-[82vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-3 right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 text-navy-600 flex items-center justify-center hover:bg-navy-600 hover:text-white transition-colors shadow-sm"
        >
          <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Project Title & Tag */}
        <div className="mb-5 sm:mb-6 pb-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pr-10">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-600">
              {project.title}
            </h3>
          </div>
        </div>

        {/* System Overview */}
        <div className="mb-5 sm:mb-6">
          <h4 className="text-base sm:text-lg font-bold text-navy-600 mb-3 flex items-center gap-2">
            <FaLayerGroup
              className="flex-shrink-0"
              style={{ color: '#ff5e3a' }}
            />
            System Overview
          </h4>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed bg-gray-50 p-3 sm:p-4 rounded-xl border border-gray-200">
            {project.overview}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className="text-base sm:text-lg font-bold text-navy-600 mb-3 flex items-center gap-2">
            <FaCheckCircle
              className="flex-shrink-0"
              style={{ color: '#ff5e3a' }}
            />
            Key Features
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {project.keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-2 sm:gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200"
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: '#ff5e3a' }}
                />

                <span className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  const [headingRef, headingVisible] = useScrollAnimation({
    threshold: 0.4,
  })

  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id="work"
      className="bg-white py-10 px-5 md:px-10 relative"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading with FolderGit2 icon */}
        <div className="text-center mb-5">
          <h2
            ref={headingRef}
            className={`reveal ${
              headingVisible ? 'is-visible' : ''
            } relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl text-black`}
          >
            <span className="inline-flex items-center justify-center gap-2.5">
              <FolderGit2 className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
              <span className="text-navy-600">Projects</span>
            </span>

            <span
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 rounded-full"
              style={{ backgroundColor: '#ff5e3a' }}
            />
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map((item, i) => (
            <WorkCard
              key={item.title}
              item={item}
              index={i}
              onViewProject={(project) =>
                setSelectedProject(project)
              }
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  )
}