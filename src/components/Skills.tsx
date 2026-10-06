type Skill = {
  name: string;
  level: number;
  category: string;
};

const skills: Skill[] = [
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "React", level: 70, category: "Frontend" },
  { name: "Java", level: 75, category: "Programming" },
  { name: "Git & GitHub", level: 70, category: "Tools" },
  { name: "UI/UX Design", level: 75, category: "Design" },
];

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-heading">
        <p className="section-label">MY SKILLS</p>

        <h2>Technologies I Work With</h2>

        <p>
          I continuously improve my skills by building real projects and
          learning modern development technologies.
        </p>
      </div>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-header">
              <div>
                <h3>{skill.name}</h3>
                <span>{skill.category}</span>
              </div>

              <strong>{skill.level}%</strong>
            </div>

            <div className="skill-bar">
              <div
                className="skill-progress"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;