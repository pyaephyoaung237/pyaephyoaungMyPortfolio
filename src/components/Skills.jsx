import { skills } from '../data'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaJava, FaPhp, FaDocker, FaAws, FaGithub, FaLinux, FaWindows, FaApple 
} from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiKubernetes, SiSpring, SiLaravel, SiRedis } from 'react-icons/si'
import { Code } from 'lucide-react'

const iconMap = {
  'HTML': { icon: <FaHtml5 />, color: 'text-orange-500', bg: 'bg-orange-50' },
  'CSS': { icon: <FaCss3Alt />, color: 'text-blue-500', bg: 'bg-blue-50' },
  'JavaScript': { icon: <FaJs />, color: 'text-yellow-500', bg: 'bg-yellow-50' },
  'React': { icon: <FaReact />, color: 'text-cyan-400', bg: 'bg-cyan-50' },
  'Bootstrap': { icon: <FaBootstrap />, color: 'text-purple-600', bg: 'bg-purple-50' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  'Java': { icon: <FaJava />, color: 'text-red-600', bg: 'bg-red-50' },
  'PHP': { icon: <FaPhp />, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  'Laravel': { icon: <SiLaravel />, color: 'text-red-600', bg: 'bg-red-50' },
  'SpringBoot': { icon: <SiSpring />, color: 'text-green-600', bg: 'bg-green-50' },
  'MySQL': { icon: <SiMysql />, color: 'text-blue-600', bg: 'bg-blue-50' },
  'PostgreSQL': { icon: <SiPostgresql />, color: 'text-blue-400', bg: 'bg-blue-50' },
  'MongoDB': { icon: <SiMongodb />, color: 'text-green-500', bg: 'bg-green-50' },
  'Redis': { icon: <SiRedis />, color: 'text-red-600', bg: 'bg-red-50' },
  'Docker': { icon: <FaDocker />, color: 'text-blue-500', bg: 'bg-blue-50' },
  'AWS': { icon: <FaAws />, color: 'text-amber-500', bg: 'bg-amber-50' },
  'GitHub': { icon: <FaGithub />, color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-100 dark:bg-gray-800' },
  'Kubernetes': { icon: <SiKubernetes />, color: 'text-blue-600', bg: 'bg-blue-50' },
  'shell script': { icon: '</>', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  'Linux': { icon: <FaLinux />, color: 'text-yellow-700 dark:text-yellow-400', bg: 'bg-yellow-50 dark:bg-gray-800' },
  'Windows': { icon: <FaWindows />, color: 'text-sky-500', bg: 'bg-sky-50' },
  'MacOS': { icon: <FaApple />, color: 'text-gray-800 dark:text-gray-200', bg: 'bg-gray-100 dark:bg-gray-800' },
}

const groupLabels = {
  frontend: 'Development',
  backend: 'Development',
  database: 'Cache & Databases',
  devops: 'DevOps & Systems',
}

function SkillCard({ skill, darkMode }) {
  const skillData = iconMap[skill.name] || {}
  const IconComponent = skillData.icon
  const iconColor = skillData.color || (darkMode ? 'text-gray-200' : 'text-navy-600')
  const iconBg = skillData.bg || (darkMode ? 'bg-gray-800' : 'bg-gray-50')

  return (
    <div
      className={`relative rounded-xl px-4 py-6 flex flex-col items-center gap-3 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-800/80 border border-gray-700 shadow-sm' 
          : 'bg-white border border-transparent shadow-sm'
      }`}
    >
      <span className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-2xl ${iconColor}`}>
        {IconComponent || skill.name.slice(0, 2).toUpperCase()}
      </span>
      <span className={`font-medium text-sm text-center transition-colors duration-300 ${
        darkMode ? 'text-gray-200' : 'text-black'
      }`}>
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills({ darkMode, lang }) {
  const groupedSkills = skills.reduce((acc, skill) => {
    const groupKey = groupLabels[skill.group] || 'Other'
    if (!acc[groupKey]) acc[groupKey] = []
    acc[groupKey].push(skill)
    return acc
  }, {})

  return (
    <section 
      id="skills" 
      className={`py-10 px-5 md:px-10 transition-colors ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
      }`}
    >
      <div className="max-w-7xl mx-auto">
         {/* Title with Code icon in front */}
         <div className="text-center mb-4">
           <h2 
             className={`relative pb-4 inline-block font-display font-bold text-2xl md:text-3xl ${
               darkMode ? 'text-white' : 'text-black'
             }`}
           >
             <span className="inline-flex items-center justify-center gap-2.5">
               <Code className="w-6 h-6 shrink-0" style={{ color: '#ff5e3a' }} />
               <span className={darkMode ? 'text-white' : 'text-black'}>
                 {lang === 'jp' ? 'テクニカルスキル' : 'Technical Skills'}
               </span>
             </span>
             <span
               className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
               style={{ backgroundColor: '#ff5e3a' }}
             ></span>
           </h2>
         </div>

        <p className={`text-center mb-1 md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
          {lang === 'jp' ? '普段使っているツールやテクノロジー' : 'The tools and technologies I work with on a daily basis'}
        </p>

        <div className="space-y-6 mt-6">
          {Object.entries(groupedSkills).map(([categoryName, categorySkills]) => (
            <div 
              key={categoryName} 
              className={`rounded-2xl p-6 md:p-8 shadow-sm transition-colors ${
                darkMode ? 'bg-gray-800/50 border border-gray-800' : 'bg-white border border-gray-100'
              }`}
            >
              <h3 className={`text-xl font-bold mb-6 pb-2 inline-block border-b-2 ${
                darkMode ? 'text-white border-[#ff5e3a]' : 'text-black border-black'
              }`}>
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {categorySkills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} darkMode={darkMode} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}