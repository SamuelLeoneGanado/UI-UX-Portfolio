import ProjectLink from "./ProjectLink";
import service from "../assets/service.jpg";
import memory from "../assets/memory.png";
import commerce from "../assets/commerce.png";
import analytics from "../assets/analytics.png";

function Projects() {
  return (
    <section id="projects" className="container py-5">
      <h1>Projects</h1>
      <br></br>
      <br></br>
      <div className="ProjectAlignment">
        <ProjectLink
          img={service}
          title="Project 1: Ottawa Mechanic Services"
          text="Prototype website for a fictional mechanic, Due June 7th"
          link="https://ottawamechanicservices.netlify.app/"
        />
        <ProjectLink
          img={memory}
          title="Project 2: Memory Game"
          text="Memory game 'Rectangle Recollect', Due June 21st"
          link="https://slg-seg3125-memorygame.netlify.app"
        />
        <ProjectLink
          img={commerce}
          title="Project 3: E-commerce"
          text="Watch site 'Rewind', Due July 5th"
          link="https://slg-seg3125-e-commerce.netlify.app/"
        />
        <ProjectLink
          img={analytics}
          title="Project 4: Dashboard"
          text="Description, Due July 19th"
          link="/project4"
        />
      </div>
    </section>
  );
}
export default Projects;
