import { skills } from '../data'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaJava, FaPhp, FaDocker, FaAws, FaGithub, FaLinux, FaWindows, FaApple 
} from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiKubernetes, SiSpring, SiLaravel, SiRedis } from 'react-icons/si'
import { Code } from 'lucide-react'

const iconMap = {
  'HTML': { icon: <FaHtml5 />, color: 'text-orange-500' },
  'CSS': { icon: <FaCss3Alt />, color: 'text-blue-500' },
  'JavaScript': { icon: <FaJs />, color: 'text-yellow-500' },
  'React': { icon: <FaReact />, color: 'text-cyan-400' },
  'Bootstrap': { icon: <FaBootstrap />, color: 'text-purple-600' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-cyan-500' },
  'Java': { icon: <FaJava />, color: 'text-red-600' },
  'PHP': { icon: <FaPhp />, color: 'text-indigo-500' },
  'Laravel': { icon: <SiLaravel />, color: 'text-red-600' },
  'SpringBoot': { icon: <SiSpring />, color: 'text-green-600' },
  'MySQL': { icon: <SiMysql />, color: 'text-blue-600' },
  'PostgreSQL': { icon: <SiPostgresql />, color: 'text-blue-400' },
  'MongoDB': { icon: <SiMongodb />, color: 'text-green-500' },
  'Redis': { icon: <SiRedis />, color: 'text-red-600' },
  'Docker': { icon: <FaDocker />, color: 'text-blue-500' },
  'AWS': { icon: <FaAws />, color: 'text-amber-500' },
  'GitHub': { icon: <FaGithub />, color: 'text-gray-800 dark:text-gray-200' },
  'Kubernetes': { icon: <SiKubernetes />, color: 'text-blue-600' },
  'shell script': { icon: '</>', color: 'text-emerald-600' },
  'Linux': { icon: <FaLinux />, color: 'text-yellow-700 dark:text-yellow-400' },
  'Windows': { icon: <FaWindows />, color: 'text-sky-500' },
  'MacOS': { icon: <FaApple />, color: 'text-gray-800 dark:text-gray-200' },
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

  return (
    <div className="relative px-2 py-4 md:px-4 md:py-6 flex flex-col items-center gap-2.5 md:gap-3">
      <span className={`text-2xl md:text-3xl flex items-center justify-center ${iconColor}`}>
        {IconComponent || skill.name.slice(0, 2).toUpperCase()}
      </span>
      <span className={`font-medium text-xs md:text-sm text-center transition-colors duration-300 ${
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
               <span className={darkMode ? 'text-white' : 'text-navy-600'}>
                 {lang === 'jp' ? 'テクニカルスキル' : 'Technical Skills'}
               </span>
             </span>
             <span
               className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
               style={{ backgroundColor: '#ff5e3a' }}
             ></span>
           </h2>
         </div>

        <p className={`text-center mb-1 text-sm md:text-base ${darkMode ? 'text-gray-300' : 'text-gray-900'}`}>
          {lang === 'jp' ? '普段使っているツールやテクノロジー' : 'The tools and technologies I work with on a daily basis'}
        </p>

        <div className="space-y-6 mt-6">
          {Object.entries(groupedSkills).map(([categoryName, categorySkills]) => (
            <div 
              key={categoryName} 
              className={`rounded-2xl p-4 md:p-8 transition-colors ${
                darkMode ? 'bg-gray-800/50' : 'bg-white border border-gray-100'
              }`}
            >
              <h3 className={`text-lg md:text-xl font-bold mb-4 md:mb-6 pb-2 inline-block border-b-2 ${
                darkMode ? 'text-white border-[#ff5e3a]' : 'text-navy-600 border-black'
              }`}>
                {categoryName}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
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