import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import { useReveal } from "./hooks/useReveal";

function App() {
  const [darkMode, setDarkMode] = useState(true);
useReveal();
  function toggleTheme() {
    setDarkMode((previousMode) => !previousMode);
  }

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main>
  <div className="reveal">
    <Hero />
  </div>

  <div className="reveal">
    <About />
  </div>

  <div className="reveal">
    <Skills />
  </div>

  <div className="reveal">
    <Projects />
  </div>

  <div className="reveal">
    <Services />
  </div>

  <div className="reveal">
    <Contact />
  </div>
</main>

      <footer>
        <p>© 2026 Sena Alemayehu. All rights reserved.</p>
      </footer>

    </div>
  );
  
}

export default App;