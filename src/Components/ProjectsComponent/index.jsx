import "./styles.css";
import { useState } from "react";
import TitleComponent from "../TitleComponent";
import OGModalThumb from "/assets/modals/banner-img.webp";
import CGLModalThumb from "/assets/modals/CGL-logo.png";
import ProjectModalComponent from "../ProjectModalComponent";

const projects = {
  project_1: {
    id: 1,
    title: `OG Creations Recording Studio Site`,
    thumbnail: OGModalThumb,
    techStack: [
      "Angular",
      "Typescript",
      "HTML",
      "CSS",
      "FB",
      "Node",
      "Photoshop",
    ],
    galleryImages: [],
  },
  project_2: {
    thumbnail: CGLModalThumb,
    techStack: ["JS", "THREE", "Node", "CSS", "HTML", "FB", "Photoshop"],
    galleryImages: [],
  },
};

function ProjectsComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  const handleThumbnailClick = (project) => {
    setCurrentProject(project);
    setIsModalOpen(true);
  };

  return (
    <div id="projects-section" className={`projects--wrapper container`}>
      <TitleComponent
        className="projects-title"
        textContent={"My Projects"}
        classTitle="projects-title"
      ></TitleComponent>

      <div className="projects--thumbnails__container-outer">
        <div className="project_2-thumbnail--wrapper">
          <div
            className="thumbnail-overlay"
            onClick={() => handleThumbnailClick(projects.project_2)}
          >
            <div className="overlay--inner">
              <p>see more</p>
            </div>
          </div>
          <div className="project_2-thumbnail">
            <img
              src={CGLModalThumb}
              loading="lazy"
              alt="CGL project thumbnail"
            ></img>
          </div>
        </div>
        <div className="project_1-thumbnail--wrapper">
          <div
            className="thumbnail-overlay"
            onClick={() => handleThumbnailClick(projects.project_1)}
          >
            <div className="overlay--inner">
              <p>see more</p>
            </div>
          </div>
          <div className="project_1-thumbnail">
            <img
              src={OGModalThumb}
              loading="lazy"
              alt="og creations project thumbnail"
            ></img>
          </div>
        </div>
      </div>
      <ProjectModalComponent
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentProject(null);
        }}
        techStack={currentProject?.techStack}
      >
        {/* this is where the carousel will go  */}
      </ProjectModalComponent>
    </div>
  );
}

export default ProjectsComponent;
