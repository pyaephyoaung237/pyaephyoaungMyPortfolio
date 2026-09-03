import { useState } from 'react'
import { work } from '../data'
import {
  FaExternalLinkAlt,
  FaCode,
  FaCheckCircle,
  FaLayerGroup,
  FaTimes,
} from 'react-icons/fa'
import { FolderGit2 } from 'lucide-react'

function WorkCard({ item, onViewProject, darkMode, lang }) {
  return (
    <div
      className={`border rounded-xl overflow-hidden group shadow-sm transition-all duration-300 flex flex-col ${
        darkMode 
          ? 'bg-gray-800/80 border-gray-700' 
          : 'bg-white border-gray-200 hover:shadow-md'
      }`}
    >
      {/* Top Banner Area */}
      <div className={`h-44 flex items-center justify-center relative overflow-hidden ${
        darkMode ? 'bg-gray-900/50' : 'bg-navy-50'
      }`}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className={`font-display font-bold text-5xl opacity-40 group-hover:scale-110 transition-transform duration-300 ${
            darkMode ? 'text-gray-400' : 'text-navy-600'
          }`}>
            {item.title.slice(0, 1)}
          </span>
        )}

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-navy-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => onViewProject(item)}
            className="px-5 py-2.5 bg-white text-navy-600 font-semibold rounded-lg shadow-md hover:bg-navy-600 hover:text-white transition-colors duration-300 flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0"
          >
            <span>{lang === 'jp' ? 'プロジェクト詳細' : 'Project Details'}</span>
            <FaExternalLinkAlt className="text-xs" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className={`px-5 py-4 flex-1 flex flex-col justify-between border-t ${
        darkMode ? 'bg-gray-800/80 border-gray-700' : 'bg-white border-gray-100'
      }`}>
        <div>
          <p className={`font-bold text-lg ${darkMode ? 'text-gray-100' : 'text-navy-600'}`}>
            {lang === 'jp' && item.titleJp ? item.titleJp : item.title}
          </p>

          <p className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            {lang === 'jp' && item.tagJp ? item.tagJp : item.tag}
          </p>
        </div>

        {/* Language / Tech Badges */}
        <div className={`mt-4 pt-3 border-t flex flex-wrap gap-1.5 ${
          darkMode ? 'border-gray-700' : 'border-gray-100'
        }`}>
          {item.languages?.map((langItem, idx) => (
            <span
              key={idx}
              className={`text-[11px] px-2 py-0.5 rounded-md flex items-center gap-1 font-medium ${
                darkMode ? 'bg-gray-700 text-gray-200' : 'bg-gray-100 text-navy-600'
              }`}
            >
              <FaCode
                className="text-[9px]"
                style={{ color: '#ff5e3a' }}
              />
              {langItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectDetailModal({ project, onClose, darkMode, lang }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50  flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      {/* Modal */}
      <div
        className={`relative w-[92%] sm:w-full max-w-2xl border rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl max-h-[82vh] sm:max-h-[90vh] overflow-y-auto transition-colors ${
          darkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-200 text-black'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project details"
          className={`absolute top-3 right-3 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors shadow-sm ${
            darkMode ? 'bg-gray-700 text-gray-200 hover:bg-navy-600 hover:text-white' : 'bg-gray-100 text-navy-600 hover:bg-navy-600 hover:text-white'
          }`}
        >
          <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        {/* Project Title & Tag */}
        <div className={`mb-5 sm:mb-6 pb-4 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-2 pr-10 ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div>
            <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold ${darkMode ? 'text-white' : 'text-navy-600'}`}>
              {lang === 'jp' && project.titleJp ? project.titleJp : project.title}
            </h3>
          </div>
        </div>

        {/* System Overview */}
        <div className="mb-5 sm:mb-6">
          <h4 className={`text-base sm:text-lg font-bold mb-3 flex items-center gap-2 ${
            darkMode ? 'text-white' : 'text-navy-600'
          }`}>
            <FaLayerGroup
              className="flex-shrink-0"
              style={{ color: '#ff5e3a' }}
            />
            {lang === 'jp' ? 'システム概要' : 'System Overview'}
          </h4>

          <p className={`text-sm sm:text-base leading-relaxed p-3 sm:p-4 rounded-xl border ${
            darkMode ? 'bg-gray-900/50 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'
          }`}>
            {lang === 'jp' && project.overviewJp ? project.overviewJp : project.overview}
          </p>
        </div>

        {/* Key Features */}
        <div>
          <h4 className={`text-base sm:text-lg font-bold mb-3 flex items-center gap-2 ${
            darkMode ? 'text-white' : 'text-navy-600'
          }`}>
            <FaCheckCircle
              className="flex-shrink-0"
              style={{ color: '#ff5e3a' }}
            />
            {lang === 'jp' ? '主な機能' : 'Key Features'}
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {(lang === 'jp' && project.keyFeaturesJp ? project.keyFeaturesJp : project.keyFeatures)?.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 sm:gap-3 p-3 rounded-xl border ${
                  darkMode ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-50 border-gray-200'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                  style={{ backgroundColor: '#ff5e3a' }}
                />

                <span className={`text-xs sm:text-sm leading-relaxed ${
                  darkMode ? 'text-gray-300' : 'text-gray-800'
                }`}>
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

export default function Work({ darkMode, lang }) {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section
      id="work"
      className={`py-10 px-5 md:px-10 relative transition-colors ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading with FolderGit2 icon */}
        <div className="text-center mb-5">
          <h2
            className={`relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl ${
              darkMode ? 'text-white' : 'text-black'
            }`}
          >
            <span className="inline-flex items-center justify-center gap-2.5">
              <FolderGit2 className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
              <span className={darkMode ? 'text-white' : 'text-navy-600'}>
                {lang === 'jp' ? 'プロジェクト' : 'Projects'}
              </span>
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
              darkMode={darkMode}
              lang={lang}
            />
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            darkMode={darkMode}
            lang={lang}
          />
        )}
      </div>
    </section>
  )
}