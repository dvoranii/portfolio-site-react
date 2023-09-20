import "./styles.css";
import TitleComponent from "../TitleComponent";

function ProjectsComponent() {
  return (
    <div>
      <TitleComponent
        className="projects-title"
        textContent={"My Projects"}
        classTitle="projects-title"
      ></TitleComponent>
    </div>
  );
}

export default ProjectsComponent;
