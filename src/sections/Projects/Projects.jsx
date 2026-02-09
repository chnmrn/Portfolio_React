import { useState, useEffect, useRef } from 'react';
import './Projects.css';
import projectsData from '../../data/Projects/projectsData';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCurrentIndex(prev =>
        prev === projectsData.length - 1 ? 0 : prev + 1
      );
    }, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const currentProject = projectsData[currentIndex];

  return (
    <section className="projects" id="projects">
      <div className="projects__container">
        <h1 className="projects__title">Recent Projects</h1>

        <p className="projects__text">
          A selection of my recent work.  
          I will update this as new projects come by!
          Check my projects by clicking them.
          <br />
          <br />
          I usually work in web development, from simple systems to complex 
          full-stack projects. Occasionally, I enjoy working on projects 
          outside of this area, such as video games and other non-web 
          development applications.     
        </p>

        <div className="projects__spacer" />

        <div className="projects__slider">
          <div className="projects__track">
            {[...projectsData, ...projectsData].map((project, index) => (
              <div className="projects__slide" key={index}>
                <img
                  src={project.image}
                  alt={project.alt}
                  className="projects__image"
                />

                <div className="projects__overlay">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn--secondary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
