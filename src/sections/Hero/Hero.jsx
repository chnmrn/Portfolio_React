import { useEffect } from "react";
import './Hero.css'
import "/src/styles/buttons.css";
import juanImg from '../../assets/images/juan.jpeg';

const Hero = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const element = document.querySelector(".hero__role");

    let interval = null;

    element.addEventListener("mouseenter", () => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        element.innerText = element.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return "Web Developer"[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration >= "Web Developer".length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 30);
    });
  }, []);

  return (
    <section className="hero" id="hero">
      <span className="hero__meta hero__meta--top">
            ///
      </span>
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
              src={juanImg}
              alt="Juan Diego"
              className="hero__image-main"
            />
          </div>

          <span className="hero__meta hero__meta--bottom">
            革新する
          </span>

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
