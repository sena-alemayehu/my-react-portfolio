import profileImage from "../assets/largeImg.jpeg";

function About() {
  return (
    <section id="about" className="about">
      {/* Section Heading */}
      <div className="section-heading">
        <p className="section-label">ABOUT ME</p>

        <h2>Turning Ideas Into Digital Experiences</h2>
      </div>

      {/* About Content */}
      <div className="about-content">

        {/* About Image */}
        <div className="about-image">
          <img
            src={profileImage}
            alt="Sena Alemayehu"
          />
        </div>

        {/* About Text */}
        <div className="about-text">
          <h3>I'm Sena Alemayehu</h3>

          <p>
            I'm a Software Engineering student and an aspiring UI/UX
            designer and full-stack developer. I enjoy creating modern,
            responsive and user-friendly digital experiences.
          </p>

          <p>
            My current learning path includes HTML, CSS, JavaScript,
            TypeScript and React. I'm continuously building projects to
            improve my development skills and turn ideas into real
            applications.
          </p>

          {/* Information */}
          <div className="about-info">
            <div>
              <strong>Education</strong>
              <span>Software Engineering</span>
            </div>

            <div>
              <strong>Focus</strong>
              <span>Web Development</span>
            </div>

            <div>
              <strong>Location</strong>
              <span>Ethiopia</span>
            </div>
          </div>

          {/* Button */}
          <a
            href="#contact"
            className="btn primary-btn"
          >
            Let's Work Together
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;