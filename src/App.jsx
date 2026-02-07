import Hero from './sections/Hero/Hero'
import AboutMe from './sections/AboutMe/AboutMe'
import Projects from './sections/Projects/Projects'
import TechStack from './sections/TechStack/TechStack'
import Experience from './sections/Experience/Experience'
import Contact from './sections/Contact/Contact'

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Hero />
      <AboutMe />
      <Projects />
      <TechStack />
      <Experience />
      <Contact />
    </div>
  )
}

export default App
