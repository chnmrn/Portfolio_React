import { useState, useEffect } from 'react'
import './TechStack.css'
import techStackData from '../../data/TechStack/techStackData'

const TechStack = () => {
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
    <section className="techstack" id="techstack">
      <div className="techstack__container">
        <h2 className="techstack__title">Tech Stack</h2>

        <div className="techstack__layout">

          <div className="techstack__visual">
            <img
              key={activeItem.icon}
              src={activeItem.icon}
              alt={activeItem.name}
              className="techstack__icon-visual"
            />
            <p className="techstack__icon-name">{activeItem.name}</p>
          </div>

          <div className="techstack__content">
            {techStackData.map((group, index) => (
              <div
                key={group.title}
                className={`techstack__group ${
                  index === activeGroupIndex ? 'active' : ''
                }`}
                onMouseEnter={() => {
                  setActiveGroupIndex(index)
                  setActiveItemIndex(0)
                }}
              >
                <h3 className="techstack__group-title">
                  {group.title}
                </h3>

                <p className="techstack__text">
                  {group.items.map(item => item.name).join(' · ')}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default TechStack