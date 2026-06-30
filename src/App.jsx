import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Project from "./components/Project/Project.jsx";
import About from "./components/About/About.jsx";
import Skill from "./components/Skill/Skill.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div id="main">
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skill">
        <Skill />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
