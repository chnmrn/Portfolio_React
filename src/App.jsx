import Sidebar from './components/Sidebar'
import Hero from './sections/Hero/Hero'
import AboutMe from './sections/AboutMe/AboutMe'
import Projects from './sections/Projects/Projects'

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Sidebar />
      <Hero />
      <AboutMe />
      <Projects />
    </div>
  )
}

export default App
