import { useState } from "react";
import "./styles.css";
// import ReactLogo from "/assets/react.svg";
import HeaderLogo from "/assets/headerLogo.png";
import NavSocialsComponent from "./Components/NavSocialsComponent";

function NavComponent() {
  const [navActive, setNavActive] = useState(false);
  return (
    <div className="nav--wrapper">
      <nav className="nav">
        <div className="nav--logo__wrapper">
          <img className="nav--logo" src={HeaderLogo}></img>
        </div>
        <ul className={navActive ? "nav--list nav-active" : "nav--list"}>
          <li>About Me</li>
          <li>Projects</li>
          <li>Contact</li>
          <NavSocialsComponent></NavSocialsComponent>
        </ul>

        <div
          className="burger"
          onClick={() => {
            setNavActive((prevState) => !prevState);
          }}
        >
          <div className="line1">&nbsp;</div>
          <div className="line2">&nbsp;</div>
          <div className="line3">&nbsp;</div>
        </div>
      </nav>
    </div>
  );
}

export default NavComponent;
