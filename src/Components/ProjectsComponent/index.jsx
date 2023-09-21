import "./styles.css";
import TitleComponent from "../TitleComponent";
import OGModalThumb from "/assets/modals/banner-img.webp";
import CGLModalThumb from "/assets/modals/CGL-logo.png";

function ProjectsComponent() {
  return (
    <div id="projects-section" className={`projects--wrapper container`}>
      <TitleComponent
        className="projects-title"
        textContent={"My Projects"}
        classTitle="projects-title"
      ></TitleComponent>

      <div className="projects--thumbnails__container-outer">
        <div className="project_1-thumbnail--wrapper">
          <div className="project_1-thumbnail">
            <img src={OGModalThumb}></img>
          </div>
        </div>
        <div className="project_2-thumbnail--wrapper">
          <div className="project_2-thumbnail">
            <img src={CGLModalThumb}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;