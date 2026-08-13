import { skills } from '../data'
import useScrollAnimation from '../hooks/useScrollAnimation'
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, 
  FaJava, FaPhp, FaDocker, FaAws, FaGithub, FaLinux, FaWindows 
} from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiPostgresql, SiMongodb, SiKubernetes } from 'react-icons/si'

const iconMap = {
  'HTML': { icon: <FaHtml5 />, color: 'text-orange-500', bg: 'bg-orange-50' },
  'CSS': { icon: <FaCss3Alt />, color: 'text-blue-500', bg: 'bg-blue-50' },
  'JavaScript': { icon: <FaJs />, color: 'text-yellow-400', bg: 'bg-yellow-50' },
  'React': { icon: <FaReact />, color: 'text-cyan-400', bg: 'bg-cyan-50' },
  'Bootstrap': { icon: <FaBootstrap />, color: 'text-purple-600', bg: 'bg-purple-50' },
  'Tailwind CSS': { icon: <SiTailwindcss />, color: 'text-cyan-500', bg: 'bg-cyan-50' },
  'Java': { icon: <FaJava />, color: 'text-red-600', bg: 'bg-red-50' },
  'PHP': { icon: <FaPhp />, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  'MySQL': { icon: <SiMysql />, color: 'text-blue-600', bg: 'bg-blue-50' },
  'PostgreSQL': { icon: <SiPostgresql />, color: 'text-blue-400', bg: 'bg-blue-50' },
  'MongoDB': { icon: <SiMongodb />, color: 'text-green-500', bg: 'bg-green-50' },
  'Docker': { icon: <FaDocker />, color: 'text-blue-500', bg: 'bg-blue-50' },
  'AWS': { icon: <FaAws />, color: 'text-amber-500', bg: 'bg-amber-50' },
  'GitHub': { icon: <FaGithub />, color: 'text-gray-900', bg: 'bg-gray-100' },
  'Kubernetes': { icon: <SiKubernetes />, color: 'text-blue-600', bg: 'bg-blue-50' },
  'shell script': { icon: '</>', color: 'text-emerald-600', bg: 'bg-emerald-50' },
  'Linux': { icon: <FaLinux />, color: 'text-yellow-800', bg: 'bg-yellow-50' },
  'Windows': { icon: <FaWindows />, color: 'text-sky-500', bg: 'bg-sky-50' },
}

const groupLabels = {
  frontend: 'Development',
  backend: 'Development',
  database: 'Data & Databases',
  devops: 'DevOps & Systems',
}

function SkillCard({ skill, index }) {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.2 })
  const skillData = iconMap[skill.name] || {}
  const IconComponent = skillData.icon
  const iconColor = skillData.color || 'text-navy-600'
  const iconBg = skillData.bg || 'bg-gray-50'

  return (
    <div
      ref={ref}
      className={`reveal-scale ${isVisible ? 'is-visible' : ''} group relative bg-white  rounded-xl px-4 py-6 flex flex-col items-center gap-3 hover:border-blue-500 hover:shadow-md transition-all duration-300`}
      style={{ transitionDelay: `${(index % 7) * 60}ms` }}
    >
      <span className={`w-12 h-12 rounded-full ${iconBg} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 ${iconColor}`}>
        {IconComponent || skill.name.slice(0, 2).toUpperCase()}
      </span>
      <span className="font-medium text-sm text-black group-hover:text-blue-600 transition-colors duration-300 text-center">
        {skill.name}
      </span>
    </div>
  )
}

export default function Skills() {
  const [headingRef, headingVisible] = useScrollAnimation({ threshold: 0.4 })

  const groupedSkills = skills.reduce((acc, skill) => {
    const groupKey = groupLabels[skill.group] || 'Other'
    if (!acc[groupKey]) acc[groupKey] = []
    acc[groupKey].push(skill)
    return acc
  }, {})

  return (
    <section id="skills" className="bg-white py-10 px-5 md:px-10">
      <div className="max-w-7xl mx-auto">
         <h2 className="text-center font-display font-bold text-2xl md:text-3xl text-black mb-12 relative pb-4">
          <span className="text-navy-600">Technical Skills</span>
          <span
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full"
            style={{ backgroundColor: '#ff5e3a' }}
          ></span>
        </h2>
        <p className="text-center text-gray-900 mb-12 md:text-base">
          The tools and technologies I work with on a daily basis
        </p>

        <div className="space-y-12">
          {Object.entries(groupedSkills).map(([categoryName, categorySkills]) => (
            <div key={categoryName} className=" rounded-2xl p-6 md:p-8 bg-white shadow-sm">
              <h3 className="text-xl font-bold text-navy-600 mb-6 pb-2 border-b-2 border-navy-600 inline-block">
                {categoryName}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
                {categorySkills.map((skill, i) => (
                  <SkillCard key={skill.name} skill={skill} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}