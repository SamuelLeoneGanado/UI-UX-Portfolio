import { Link } from "react-router-dom";

function ProjectLink({
  img,
  text,
  title,
  link,
}: {
  img: string;
  text: string;
  title: string;
  link: string;
}) {
  console.log("img =", img);
  return (
    <section>
      <div className="ProjectBox">
        <a
          className="ProjectImage"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={img} alt="Project Image" className="ProjectImage" />
        </a>
        <h2>{title}</h2>
        <p>{text}</p>
        <br></br>
      </div>
    </section>
  );
}
export default ProjectLink;
