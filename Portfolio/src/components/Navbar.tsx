import "../App.css";
import HomeIcon from "../assets/house-512.png";

function Navbar() {
  return (
    <div>
      <div className="rearnavbar"></div>
      <nav className="navbar navbar-dark px-4 py-3">
        <ul className="navbar-nav flex-row w-100">
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#about">
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#workflow">
              How I Work
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link fw-bold" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item ms-auto">
            <a className="nav-link fw-bold" href="#landing">
              <img src={HomeIcon} width="35px"></img>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Navbar;
