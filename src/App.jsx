import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Work from './components/Work'
import Experience from './components/Experience'
import Achievement from './components/Achievement'
import Footer from './components/Footer'
import Contact from './components/Contact'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [lang, setLang] = useState('en')

  return (
    <div className={`min-h-screen transition-colors ${darkMode ? 'bg-gray-900 text-white dark' : 'bg-white text-black'}`}>
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        lang={lang} 
        setLang={setLang} 
      />
      <main>
        <Hero darkMode={darkMode} lang={lang} />
        <About darkMode={darkMode} lang={lang} />
        <Skills darkMode={darkMode} lang={lang} />
        <Work darkMode={darkMode} lang={lang} />
        <Experience darkMode={darkMode} lang={lang} />
        <Achievement darkMode={darkMode} lang={lang} />
        <Education darkMode={darkMode} lang={lang} /> 
        <Contact darkMode={darkMode} lang={lang} />
      </main>
      <Footer darkMode={darkMode} lang={lang} />
    </div>
  )
}