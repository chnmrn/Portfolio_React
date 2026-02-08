import './Hero.css'
import "/src/styles/buttons.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__vertical">
            <p className="hero__role">Web Developer</p>
            <h1 className="hero__title-vertical">
              <span>Juan Diego</span>
              <span> Sánchez</span>
            </h1>
          </div>

          <div className="hero__image-wrapper">
            <img
              src="/src/assets/images/juan.jpeg"
              alt="Juan Diego"
              className="hero__image-main"
            />
          </div>

          <p className="hero__description hero__description--bottom">
            Junior Full Stack Developer learning and growing in the 
            world of web development. Graduated from University Fidelitas
            in Costa Rica with a degree in Computer Science. Continuously 
            expanding my skill set and knowledge in the field, 
            eager to take on new challenges and contribute to innovative projects.
            You will find some of my projects and experience in the sections below. 
            Feel free to explore and reach out if you want to connect.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
