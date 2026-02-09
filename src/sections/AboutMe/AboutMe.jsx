import { useState, useEffect } from 'react'

import './AboutMe.css'
import techStackData from '../../data/TechStack/techStackData'


const About = () => {
  const [activeGroupIndex, setActiveGroupIndex] = useState(0)
  const [activeItemIndex, setActiveItemIndex] = useState(0)

  const activeGroup = techStackData[activeGroupIndex]
  const activeItem = activeGroup.items[activeItemIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItemIndex(prev =>
        prev === activeGroup.items.length - 1 ? 0 : prev + 1
      )
    }, 2000)

    return () => clearInterval(interval)
  }, [activeGroupIndex])


  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__layout"> 
          <div className="about__techstack"> 
            <h2 className='about__tech__title'> My Tech Stack</h2>
            <div className="about__tech__layout">
              <div className="about__tech__visual">
                <img
                  key={activeItem.icon}
                  src={activeItem.icon}
                  alt={activeItem.name}
                  className="about__tech__icon-visual"/>
              </div>

              <div className="about__tech__content">
                {techStackData.map((group, index) => (
                <div key={group.title}
                     className={`about__tech__group ${
                     index === activeGroupIndex ? 'active' : ''
                     }`}
                     onMouseEnter={() => {
                     setActiveGroupIndex(index)
                     setActiveItemIndex(0)
                     }}>
                  <h3 className="about__tech__group-title">{group.title}</h3>

                  <p className="about__tech__text">
                    {group.items.map(item => item.name).join(' · ')}
                  </p>
                </div>
                ))}
              </div>
            </div>
          </div>
                    
          <div className='about__user'>
            <h2 className="about__title">About Me</h2>
            <p className="about__text__user">
              Name: Juan Diego Sanchez (Chnmrn) <br />
              Email: <a href="mailto:jdsang18@gmail.com" className="about__link__user">jdsang18@gmail.com</a> <br />
              Languages: Spanish (Native), English (Fluent) <br />
              <br />
              Here are my links: <br />
            </p>
            <div className="about__actions__user">
                <a
                  href="https://www.linkedin.com/in/jdsang/"
                  target="_blank"
                  className="btn btn--secondary"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/chnmrn"
                  target="_blank"
                  className="btn btn--secondary"
                >
                  GitHub
                </a>
              </div>
          </div>
        </div>

        <div className="about__content">
          <div className='about__experience'>
            <h2 className="about__exp__title">Experience</h2>
            <div className="about__exp__text">
              <ul>
                <li>Web Developer as an independent freelancer <strong>(2025 - Present)</strong> </li>
                <li>Created a full stack academic system for the kinder Centro Infantil Agroecologico La Granja <strong>(2024 - 2025)</strong></li>
                <li>Freelancer Web developer for the company Inside Networks <strong>(2025 - Present)</strong></li>
              </ul>
            </div>
          </div>

          <div className='about__education'>
            <h2 className="about__ed__title">Education</h2>
            <div className="about__ed__text">
              <ul>
                <li>B.S. in Computer Science, University Fidelitas, Costa Rica <strong>(2022 - 2026)</strong></li>
                <li>Certificate in MS-900 and Scrum Fundamentals <strong>(2023 - Present)</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About