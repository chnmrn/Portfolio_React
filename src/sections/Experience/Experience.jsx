import './Experience.css'

const Experience = () => {
  return (
    <section className="experience" id="experience">
        <div className="experience__container">
            <h2 className="experience__title">Experience</h2>

            <div className="experience__layout"> 
                <div className="experience__cards">
                    <h3 className="experience__card-title">Complete Experience</h3>
                    <div className="experience__content">
                        <div className="experience__item">
                            <span className="experience__role">
                            Collections Bilingual Customer Service Agent
                            </span>
                            <span className="experience__company">
                            Concentrix
                            </span>
                            <span className="experience__date">
                            12/2025 – 02/2026
                            </span>
                        </div>


                        <div className="experience__item">
                            <span className="experience__role">
                            Web Developer
                            </span>
                            <span className="experience__company">
                            Centro Infantil Agroecológico La Granja
                            </span>
                            <span className="experience__date">
                            04/2024 – 05/2025
                            </span>
                        </div>

                    </div>
                </div>

                <div className="experience__cards">
                    <h3 className="experience__card-title">Certifications</h3>
                    <div className="experience__content">
                        <div className="experience__item">
                            <span className="experience__role">
                            Microsoft 365: Fundamentals
                            </span>
                            <span className="experience__date">
                            Aquired 09/2025
                            </span>
                        </div>

                        <div className="experience__item">
                            <span className="experience__role">
                            Scrum Fundamentals Certified
                            </span>
                            <span className="experience__date">
                            Aquired 03/2023
                            </span>
                        </div>
                    </div>
                </div>

                <div className="experience__cards">
                    <h3 className="experience__card-title">Languages</h3>
                    <div className="experience__content">
                        <div className="experience__item">
                            <span className="experience__role">
                            Spanish
                            </span>
                            <span className="experience__company">
                            Native Proficiency
                            </span>
                        </div>

                        <div className="experience__item">
                            <span className="experience__role">
                            English
                            </span>
                            <span className="experience__company">
                            Fluent Proficiency
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience