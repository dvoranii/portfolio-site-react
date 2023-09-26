import "./styles.css";
import { useState } from "react";
import TitleComponent from "../TitleComponent";
import OGModalThumb from "/assets/modals/banner-img.webp";
import CGLModalThumb from "/assets/modals/CGL-logo.png";
import ProjectModalComponent from "../ProjectModalComponent";
import ImageCarouselComponent from "../ProjectModalComponent/Components/ImageCarouselComponent";

import OGCarouselImg1 from "/assets/modals/carouselImages/OG-gallery-img(1).png";
import OGCarouselImg2 from "/assets/modals/carouselImages/OG-gallery-img(2).png";
import OGCarouselImg3 from "/assets/modals/carouselImages/OG-gallery-img(3).png";

import CGLCarouselImg1 from "/assets/modals/carouselImages/CGL-modal-img-01.png";
import CGLCarouselImg2 from "/assets/modals/carouselImages/CGL-modal-img-02.png";
import CGLCarouselImg3 from "/assets/modals/carouselImages/CGL-modal-img-03.png";

const projects = {
  project_1: {
    id: 1,
    title: `OG Creations Recording Studio Site`,
    thumbnail: OGModalThumb,
    techStack: [
      "Angular",
      "Typescript",
      "CSS",
      "HTML",
      "Firebase",
      "Node",
      "Photoshop",
    ],
    galleryImages: [OGCarouselImg1, OGCarouselImg2, OGCarouselImg3],
    githubURL: "https://github.com/dvoranii/og-creations-website",
    liveDemoURL: "https://www.ogcreations.ca/",
  },
  project_2: {
    id: 2,
    title: "Canadian Global Logistics Inc. Website",
    thumbnail: CGLModalThumb,
    techStack: [
      "JavaScript",
      "THREE",
      "CSS",
      "HTML",
      "Firebase",
      "Node",
      "Photoshop",
    ],
    galleryImages: [CGLCarouselImg1, CGLCarouselImg2, CGLCarouselImg3],
    githubURL: "https://github.com/dvoranii/reCaptchaV2",
    liveDemoURL: "https://cglwebsite.vercel.app/",
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
        <div
          className="project_2-thumbnail--wrapper"
          onClick={() => handleThumbnailClick(projects.project_2)}
        >
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
        <div
          className="project_1-thumbnail--wrapper"
          onClick={() => handleThumbnailClick(projects.project_1)}
        >
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
        id={currentProject?.id}
        title={currentProject?.title}
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
