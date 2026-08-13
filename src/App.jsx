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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Work />
        <Experience />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
