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
        <Link className="ProjectImage" to={link}>
          <img src={img} alt="Project Image" className="ProjectImage" />
        </Link>
        <h2>{title}</h2>
        <p>{text}</p>
        <br></br>
      </div>
    </section>
  );
}
export default ProjectLink;
