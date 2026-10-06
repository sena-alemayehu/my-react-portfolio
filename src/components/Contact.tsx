import { FormEvent, useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section id="contact" className="contact section">
      <div className="section-heading">
        <p className="section-label">CONTACT ME</p>

        <h2>Let's Build Something Together</h2>

        <p>
          Have a project idea, internship opportunity or just want to
          connect? Send me a message.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            I'm always interested in learning, collaborating and working
            on interesting projects.
          </p>

          <div className="contact-item">
            <span>📧</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:nafyadabe49@gmail.com">
                nafyadabe49@gmail.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <span>📍</span>
            <div>
              <strong>Location</strong>
              <p>Ethiopia</p>
            </div>
          </div>

          <div className="social-links">
<a
  href="https://github.com/sena-alemayehu"
  target="_blank"
  rel="noopener noreferrer"
>
  GitHub
</a>

            <a
              href="https://www.linkedin.com/in/sena1221"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>

            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>

            <input
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>

            <textarea
              id="message"
              rows={6}
              placeholder="Write your message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <button type="submit" className="btn primary-btn">
            Send Message
          </button>

          {submitted && (
            <p className="success-message">
              Message submitted successfully! 🚀
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;