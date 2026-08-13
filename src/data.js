import profileImage from './assets/ppa.jpeg';
import gic from './assets/gic.png';
import yadanarbon from './assets/yadanarbon.jpg';
import ip from './assets/itpecIp.jpg';
import fe from './assets/itpecFe.jpg';
import bestOjt from './assets/bestOjt.jpg';
import internshipCompletion from './assets/internCompleted.jpg';
import guitarhub from './assets/guitar.jpg';
import mangatai from './assets/manga.jpg';
import saleway from './assets/saleway.jpg';

export const profile = {
  name: 'Pyae Phyo Aung',
  firstName: 'Pyae',
  rolesList: [
    'Web development',
    'Full Stack development',
    'Software Engineer',
  ],
  tagline: 'Full Stack developer',
  profileImage: profileImage,
  bio: `I'm a Full Stack Developer with over 1 years of experience building modern web applications from the ground up. I specialize in React, Laravel,Spring and cloud architecture, with a strong passion for creating intuitive user interfaces backed by robust, well-structured APIs.`,
  age: '—',
  email: 'pyaephyoaung2377@gmail.com',
  phone: '+959974605852',
  place: 'Mandalay, Myanmar',
  interests: 'devops engineering, cloud computing',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pyae-phyo-aung-1a3923346', text: 'IN' },
    { label: 'GitHub', href: 'https://github.com/pyaephyoaung237', text: 'GH' },
    { label: 'Twitter', href: '#', text: 'TW' },
    { label: 'Email', href: 'mailto:pyaephyoaung2377@gmail.com', text: '@' },
  ],

}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievement', href: '#achievement' },
  { label: 'Contact', href: '#contact' },
]

export const skills = [
  { name: 'HTML', group: 'frontend' },
  { name: 'CSS', group: 'frontend' },
  { name: 'JavaScript', group: 'frontend' },
  { name: 'React', group: 'frontend' },
  { name: 'Bootstrap', group: 'frontend' },
  { name: 'Tailwind CSS', group: 'frontend' },
  { name: 'Java', group: 'backend' },
  { name: 'PHP', group: 'backend' },
  { name: 'Laravel', group: 'backend' },
  { name: 'SpringBoot', group: 'backend' },
  { name: 'MySQL', group: 'database' },
  { name: 'PostgreSQL', group: 'database' },
  { name: 'MongoDB', group: 'database' },
  { name: 'Redis', group: 'database' },
  { name: 'Docker', group: 'devops' },
  { name: 'AWS', group: 'devops' },
  { name: 'GitHub', group: 'devops' },
  { name: 'Kubernetes', group: 'devops' },
  { name: 'shell script', group: 'devops' },
  { name: 'Linux', group: 'devops' },
  { name: 'Windows', group: 'devops' },
  { name: 'MacOS', group: 'devops' },
]

export const education = [
  {
    degree: 'IT & Software Development',
    major: 'ITPEC, Software Development Life Cycle, Web Development, Logical Thinking & Critical Thinking',
    school: 'GIC Academy',
    image: gic,
    milestones: [
      'Studied ITPEC',
      'Learned Software Development Life Cycle (SDLC)',
      'Studied Web Development',
      'Developed logical and critical thinking skills',
    ],
    period: '2024 - 2026',
    status: 'Completed',
  },
  {
    degree: 'Bachelor of Science',
    major: 'Botany Major',
    school: 'Yadanarbon University',
    image: yadanarbon,
    milestones: [
      'Studied Botany',
      'Completed undergraduate studies',
    ],
    period: '2020 - 2026',
    status: 'Completed',
  },
]

export const work = [
  {
    title: 'GuitarHub',
    tag: 'Ecommerce',
    category: 'Web Application',
    image: guitarhub,
    overview: 'A full-featured e-commerce web application dedicated to buying and selling guitars, amplifiers, and music gear with secure cart management and checkout features.',
    keyFeatures: [
      'Product catalog with advanced sorting and filter options',
      'Secure user authentication and role management',
      'Shopping cart and seamless checkout pipeline',
      'Admin inventory management dashboard'
    ],
    languages: ['SpringBoot', 'Blade', 'Bootstrap', 'MySQL']
  },
  {
    title: 'MangaTai',
    tag: 'MangaReader',
    category: 'Content Platform',
    image: mangatai,
    overview: 'A comprehensive manga reading and uploading platform equipped with an admin dashboard, user coin transaction system, gift boxes, and chapter management.',
    keyFeatures: [
      'Interactive manga reader interface with smooth page navigation',
      'Coin transaction and virtual currency balance system',
      'Admin dashboard for chapter uploads and user management',
      'Daily rewards and interactive gift box system'
    ],
    languages: [ 'Laravel', 'Docker', 'MySQL', 'Tailwind CSS', 'Google OAuth']
  },
  {
    title: 'Saleway Tracking',
    tag: 'Inhouse System for sale distribution',
    category: 'Enterprise System',
    image: saleway,
    overview: 'An internal distribution and sales tracking application designed to monitor inventory movement, field sales updates, and distribution metrics efficiently.',
    keyFeatures: [
      'Real-time distribution and sales activity tracking',
      'Real-time GPS location tracking for field agents',
      'Stock management and inventory update system',
      'Automated reporting and analytics dashboard for management',
      'Role-based permissions for field agents and administrators',
      'Automated status update logs and reporting features',
      'Optimized database queries for fast local inventory lookup'
    ],
    languages: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Docker','Redis','Cobol']
  }
]

export const experience = [
  
  {
    company: 'GIC Company',
    role: 'Software Development Intern',
    place: 'GIC Company Mandalay',
    period: 'May 2026 - Jul 2026',
  },
  {
    company: 'GIC Academy',
    role: 'School Project',
    place: 'GIC Academy Mandalay',
    period: 'Dec 2025 - Mar 2026',
  },
]

export const achievements = [
  {
    title: 'ITPEC IP Certificate',
    org: 'ITPEC',
    date:'2024',
    image: ip,
  },
  {
    title: 'ITPEC FE Certificate',
    org: 'ITPEC',
    date:'2026',
    image: fe,
  },
  {
    title: 'Best OJT Project Award',
    org: 'GIC Academy',
    date:'2026',
    image: bestOjt,
  },
  {
    title: 'Internship Completion Certificate',
    org: 'GIC Company',
    date:'2026',
    image: internshipCompletion,
  },
]