import './Hero.css'
import "/src/styles/buttons.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <p className="hero__subtitle">Web Developer</p>

        <h1 className="hero__title">
          <span>Juan Diego Sánchez</span>
        </h1>

        <div className='hero__content'>
          <p className="hero__description hero__description--left">
            Junior Full Stack Developer Building scalable and modern solutions
          </p>

          <div className='hero__images'>
            <img src="/src/assets/images/juan.jpeg" alt="Hero Image" className="hero__image" />

            <img src="/src/assets/images/Swrslvt.jpg" alt="Hero Image 2" className="hero__image--secondary" />
          </div>

          <p className="hero__description hero__description--right">
            I enjoy doing freelance work for people who want to create their own websites or web systems.
          </p>
        </div>
        

        
        <div className="hero__actions">
          <a href="#about" className="btn btn--primary">
            Check my profile
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
