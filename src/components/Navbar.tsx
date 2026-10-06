import { useEffect, useState } from "react";

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Services", id: "services" },
  { name: "Contact", id: "contact" },
];

function Navbar({ darkMode, toggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter(
          (
            section
          ): section is {
            id: string;
            element: HTMLElement;
          } => section.element !== null
        );

      if (sections.length === 0) return;

      // Position just below the fixed navbar
      const checkPosition = 130;

      let currentSection = sections[0].id;

      for (const section of sections) {
        const rect = section.element.getBoundingClientRect();

        if (rect.top <= checkPosition) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    // Run when page loads
    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className="navbar">

      {/* =========================
          LOGO
      ========================= */}

      <a href="#home" className="logo">
        <span>Sena.</span>
      </a>

      {/* =========================
          MOBILE MENU BUTTON
      ========================= */}

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={
          menuOpen
            ? "Close navigation menu"
            : "Open navigation menu"
        }
        aria-expanded={menuOpen}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* =========================
          NAVIGATION
      ========================= */}

      <nav
        className={`nav-links ${
          menuOpen ? "open" : ""
        }`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={
              activeSection === item.id
                ? "active"
                : ""
            }
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* =========================
          THEME TOGGLE
      ========================= */}

      <button
        className="theme-toggle"
        onClick={toggleTheme}
        aria-label={
          darkMode
            ? "Switch to light mode"
            : "Switch to dark mode"
        }
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* =========================
          LET'S TALK
      ========================= */}

      <a
        href="#contact"
        className="nav-button"
      >
        Let's Talk
      </a>

    </header>
  );
}

export default Navbar;