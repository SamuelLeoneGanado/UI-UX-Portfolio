import myImage from "../assets/Myself.jpg";

function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row">
        <div className="col-md-7">
          <h1>About Me</h1>
          <p>
            My name is
            <span className="name-highlight"> Samuel Leone-Ganado</span>. I am a
            2nd year Software Engineering student at the University of Ottawa. I
            have a passion for engineering, wood working, and software.
          </p>
        </div>
        <div className="col-md-5 d-flex justify-content-center">
          <img
            src={myImage}
            alt="Me"
            className="img-fluid rounded"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </section>
  );
}
export default About;
