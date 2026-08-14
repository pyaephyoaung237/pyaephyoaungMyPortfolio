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
    'Software Engineering',
  ],
  tagline: 'Full Stack developer',
  profileImage: profileImage,
  bio: 'I\'m a Full Stack Developer focused on building modern and scalable web applications. I specialize in React, Laravel, Spring Boot, and cloud technologies, combining intuitive user interfaces with robust and well-structured backend APIs. I\'m passionate about continuous learning, problem-solving, and creating reliable solutions for real-world needs.',
  age: '—',
  email: 'pyaephyoaung2377@gmail.com',
  phone: '+959974605852',
  place: 'Mandalay, Myanmar',
  interests: 'DevOps engineering, Cloud computing',
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
  { label: 'Projects', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievement', href: '#achievement' },
  { label: 'Education', href: '#education' },
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
    title: 'MangaTai',
    tag: 'MangaReader',
    category: 'Content Platform',
    image: mangatai,
    overview: 'A comprehensive manga reading and uploading platform featuring free and premium content, secure authentication, virtual coin transactions, chapter management, user interactions, and an admin dashboard for managing manga, users, and platform activities.',

    keyFeatures: [
      'Free manga reading without requiring user authentication',
      'Premium chapters accessible through virtual coin purchases',
      'Interactive manga reader with smooth page navigation',
      'Secure authentication with Google login and forgot-password functionality',
      'Coin purchase and virtual currency balance system',
      '24-hour daily gift and reward system for users',
      'Admin and user gift management functionality',
      'Users can comment on manga and add manga to their favorites',
      'Admin dashboard for manga, chapter, user, coin, and gift management',
      'Form validation and date validation for accurate and reliable user input'
    ],
    languages: ['Laravel', 'Docker', 'MySQL', 'Tailwind CSS', 'Google OAuth']
  },
  {
    title: 'Saleway Tracking System',
    tag: 'Inhouse System for sale distribution',
    category: 'Enterprise System',
    image: saleway,
    overview: 'A comprehensive distribution and sales tracking system with dedicated user and admin panels, designed to manage field sales operations, monitor shop visits, track inventory and purchases, and record real-time GPS-based check-in and check-out activities.',
    keyFeatures: [
      'Dedicated user and admin panels with role-based access control',
      'Track which shops purchased specific products and the quantities purchased',
      'Sales history with product, quantity, shop, date, and transaction time',
      'Real-time GPS tracking for field sales agents and registered shops',
      'Check-in and check-out tracking with date and exact time',
      'Distance calculation between field agents and shops',
      'Shop visit and sales activity monitoring',
      'Stock and inventory management with sales updates',
      'Secure authentication with forgot-password functionality',
      'Form validation and date validation for accurate and reliable input',
      'Admin dashboard for sales, distribution, inventory, and activity reports',
      'Automated activity and status logs',
      'Test case writing and functional testing',
      'Optimized database queries for efficient inventory and sales data lookup'
    ],
    languages: ['Laravel', 'React', 'MySQL', 'Tailwind CSS', 'Docker', 'Redis', 'Cobol']
  },
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
    date: '2024',
    image: ip,
  },
  {
    title: 'ITPEC FE Certificate',
    org: 'ITPEC',
    date: '2026',
    image: fe,
  },
  {
    title: 'Best OJT Project Award',
    org: 'GIC Academy',
    date: '2026',
    image: bestOjt,
  },
  {
    title: 'Internship Completion Certificate',
    org: 'GIC Company',
    date: '2026',
    image: internshipCompletion,
  },
]