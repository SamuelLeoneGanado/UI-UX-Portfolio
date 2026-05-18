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
          title="Project 1: Service"
          text="Description, Due June 7th"
          link="/project1"
        />
        <ProjectLink
          img={memory}
          title="Project 2: Memory Game"
          text="Description, Due June 21st"
          link="/project2"
        />
        <ProjectLink
          img={commerce}
          title="Project 3: E-commerce"
          text="Description, Due July 5th"
          link="/project3"
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
