import './Sidebar.css'

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
]

const Sidebar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="sidebar">
      <ul className="sidebar__list">
        {sections.map(section => (
          <li key={section.id} className="sidebar__item">
            <button
              onClick={() => scrollToSection(section.id)}
              className="sidebar__link"
            >

              <span className="sidebar__dot" />
              <span className="sidebar__label">{section.label}</span>
            </button>
          </li>
        ))}
      </ul>
      <img 
        src="/src/assets/images/icons/Chnmrn.jpeg" 
        alt="Chnmrn"
        className="sidebar__image" />
    </nav>
  )
}

export default Sidebar