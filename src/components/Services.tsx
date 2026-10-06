type Service = {
  icon: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: "🎨",
    title: "UI/UX Design",
    description:
      "Designing clean, modern and user-friendly interfaces focused on a great user experience.",
  },
  {
    icon: "💻",
    title: "Web Development",
    description:
      "Building responsive websites with HTML, CSS, JavaScript, TypeScript and React.",
  },
  {
    icon: "⚛️",
    title: "React Development",
    description:
      "Creating reusable React components and interactive web applications.",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description:
      "Making websites work beautifully across phones, tablets and desktop devices.",
  },
];

function Services() {
  return (
    <section id="services" className="services section">
      <div className="section-heading">
        <p className="section-label">WHAT I DO</p>

        <h2>My Services</h2>

        <p>
          I create modern digital experiences that combine good design
          with clean and maintainable code.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <a href="#contact">Learn More →</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Services;