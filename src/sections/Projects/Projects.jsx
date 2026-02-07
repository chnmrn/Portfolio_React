import { useState } from 'react';
import './Projects.css';
import projectsData from '../../data/Projects/projectsData';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevProject = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? projectsData.length - 1 : prev - 1
        );
    }

    const nextProject = () => {
        setCurrentIndex((prev) =>
            prev === projectsData.length - 1 ? 0 : prev + 1
        );
    }

    const prevIndex =
    currentIndex === 0
        ? projectsData.length - 1
        : currentIndex - 1;

    const nextIndex =
    currentIndex === projectsData.length - 1
        ? 0
        : currentIndex + 1;

    const currentProject = projectsData[currentIndex];

    return (
        <section className="projects" id="projects">
            <div className="projects__container">
                <h1 className="projects__title">Projects</h1>
                <p className="projects__text">
                    Here are some of my recent projects. 
                    If you are interested in more, feel free to check my GitHub profile.
                </p>
                <div className="projects__carousel">

                    <div className="projects__card-wrapper projects__card--side projects__card--left">
                        <img
                        src={projectsData[prevIndex].image}
                        alt={projectsData[prevIndex].alt}
                        className="projects__card"
                        />
                    </div>

                    <div className="projects__card-wrapper projects__card--active">
                        <img
                        src={projectsData[currentIndex].image}
                        alt={projectsData[currentIndex].alt}
                        className="projects__card"
                        />

                        <div className="projects__overlay">
                        <a className="projects__overlay-btn" href={currentProject.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>

                    <div className="projects__card-wrapper projects__card--side projects__card--right">
                        <img
                        src={projectsData[nextIndex].image}
                        alt={projectsData[nextIndex].alt}
                        className="projects__card"
                        />
                    </div>

                    </div>

                <div className='projects__actions'>
                    <div className='projects__info'>
                        <h2 className='projects__subtitle'>{currentProject.title}</h2>
                        <p className='projects__text'>{currentProject.description}</p>
                    </div>
                    <div className='projects__buttons'>
                        <button className="btn btn--primary projects__arrow" onClick={prevProject}></button>
                        <button className="btn btn--primary projects__arrow" onClick={nextProject}></button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Projects;