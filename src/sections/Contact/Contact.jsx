import './Contact.css'

const About = () => {
  return (
    <section className="contact" id="contact">
        <div className="contact__container">
            <h2 className="contact__title">Contact</h2>

            <div className="contact__layout">
                <div className="contact__content">
                    <p className="contact__intro">
                    I am always open to new opportunities and collaborations. 
                    Whether you have a question, want to discuss a project, or something related to my work, feel free to reach out!
                    Just drop me a message, explaining your project or inquiry, and I'll get back to you as soon as possible.
                    </p>

                    <p className="contact__text">
                    If you have a project in mind or want to get in touch,
                    feel free to reach out using the links below.
                    </p>

                    <div className="contact__links">
                        <div className="contact__item">
                            <span className="contact__label">Email</span>
                            <a href="mailto:jdsang18@email.com" className="contact__link">
                            jdsang18@email.com
                            </a>
                        </div>

                        <div className="contact__item">
                            <span className="contact__label">LinkedIn</span>
                            <a
                            href="https://www.linkedin.com/in/jdsang/"
                            target="_blank"
                            className="contact__link"
                            >
                            linkedin.com/in/jdsang
                            </a>
                        </div>

                        <div className="contact__item">
                            <span className="contact__label">GitHub</span>
                            <a
                            href="https://github.com/chnmrn"
                            target="_blank"
                            className="contact__link"
                            >
                            github.com/chnmrn
                            </a>
                        </div>
                    </div>
                </div>
                <img src="src/assets/gifs/Contact.gif" alt="Profile" className="contact__gif" />
            </div>
        </div>
    </section>
  )
}

export default About