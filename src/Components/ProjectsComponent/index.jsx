import "./styles.css";
import { useState } from "react";
import TitleComponent from "../TitleComponent";
import ProjectModalComponent from "./Components/ProjectModalComponent";
import ImageCarouselComponent from "./Components/ProjectModalComponent/Components/ImageCarouselComponent";
import projects from "./projectsData";
import ThumbnailComponent from "./Components/ThumbnailComponent";

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
        {/* Main Grid Projects */}
        {Object.values(projects)
          .filter((_, index) => index <= 1)
          .map((project) => (
            <ThumbnailComponent
              key={project.id}
              project={project}
              onClick={handleThumbnailClick}
            />
          ))}

        {/* Sub Grid Projects */}
        <div className="sub-grid">
          {Object.values(projects)
            .filter((_, index) => index > 1)
            .map((project) => (
              <ThumbnailComponent
                key={project.id}
                project={project}
                onClick={handleThumbnailClick}
              />
            ))}

          {/* Where next row will go */}
        </div>
      </div>

      <ProjectModalComponent
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentProject(null);
        }}
        techStack={currentProject?.techStack}
        id={currentProject?.id}
        title={currentProject?.title}
        description={currentProject?.projectDescription}
        gitRepo={currentProject?.githubURL}
        siteURL={currentProject?.liveDemoURL}
      >
        {currentProject && (
          <ImageCarouselComponent
            className="carousel"
            galleryImages={currentProject.galleryImages}
          />
        )}
      </ProjectModalComponent>
    </div>
  );
}

export default ProjectsComponent;
