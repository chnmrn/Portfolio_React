import './AboutMe.css'

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>

        <div className="about__layout"> 
          <img src="src/assets/gifs/AboutMe.gif" alt="Profile" className="about__gif" />

          <div className="about__content">
            <p className="about__text">
              I'm a junior Full Stack developer with a focus on Backend. I specialize in creating modern
              web applications, accessible and well-structured, I love to learn and improve my skills every day.
              Besides my knowledge in development, I like to create digital art and videogames, learn how to make designs,
              and explore new technologies.
            </p>

            <p className="about__text">
              I enjoy transforming ideas into functional digital products,
              caring about both user experience and code quality.
              As I grow as a developer, I keep learning new technologies and best practices
              to deliver high-quality solutions.
            </p>

            <div className="about__actions">
              <a href="src/assets/files/CV.pdf" download className="btn btn--primary">
                Download CV
              </a>

              <a href="https://www.linkedin.com/in/jdsang/" target="_blank" className="btn btn--secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About