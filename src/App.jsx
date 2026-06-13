import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Project from "./components/Project/Project.jsx";

function App() {
  return (
    <div>
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="projects">
        <Project />
      </section>
    </div>
  );
}

export default App;
