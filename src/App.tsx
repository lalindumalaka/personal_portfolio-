import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'

function App() {
  useEffect(() => {
    document.title = "Lalindu Palliyaguruge | Software Engineer & Digital Marketer"
  }, [])

  return (
    <div className="min-h-screen bg-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience /> 
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App