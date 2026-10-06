import profileImage from "../assets/profile.jpeg";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Sena <span>Alemayehu</span>
        </h1>

        <h2>UI/UX Designer & Full-Stack Developer</h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly web experiences
          using modern technologies.
        </p>

<div className="hero-buttons">
  <a href="#projects" className="btn primary-btn">
    View My Work
  </a>
  
  <a
    href="/Sena-Alemayehu-CV.pdf"
    className="btn secondary-btn"
    download
  >
    Download CV
  </a>
</div>
        
      </div>
<div className="hero-image">
  <img
    src={profileImage}
    alt="Sena Alemayehu"
    className="profile-image"
  />
</div>
    </section>
  );
}

export default Hero;