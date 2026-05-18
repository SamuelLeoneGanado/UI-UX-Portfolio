import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Workflow from "../components/Workflow";
import Projects from "../components/Projects";
import BackgroundParallax from "../components/BackgroundParallax";

function Portfolio() {
  return (
    <div>
      <BackgroundParallax />
      <Navbar />
      <section id="landing" style={{ height: "30vh" }}></section>
      <Hero />
      <div style={{ height: "45vh" }}></div>
      <div className="content">
        <About />
        <hr />
        <Workflow />
        <hr />
        <Projects />
      </div>
      <div style={{ height: "10vh" }}></div>
    </div>
  );
}
export default Portfolio;
