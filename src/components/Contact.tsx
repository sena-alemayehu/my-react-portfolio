
import { useState, type FormEvent } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setIsError(true);
      setStatus("Please fill in all fields.");
      return;
    }

    setSubmitting(true);
    setStatus("");
    setIsError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || result.message || "Unable to send your message.");
      }

      setStatus(result.message || "Message sent successfully! 🚀");
      setIsError(false);

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setIsError(true);

      if (error instanceof Error) {
        setStatus(
          error.message === "Failed to fetch"
            ? "Could not connect to the server. Please try again."
            : error.message
        );
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
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
              name="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                setStatus("");
              }}
              maxLength={100}
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
                setStatus("");
              }}
              maxLength={254}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Write your message..."
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
                setStatus("");
              }}
              maxLength={5000}
              required
            />
          </div>

          <button
            type="submit"
            className="btn primary-btn"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>

          {status && (
            <p
              className={isError ? "error-message" : "success-message"}
              role="status"
              aria-live="polite"
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
