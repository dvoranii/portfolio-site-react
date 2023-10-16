import OGCarouselImg1 from "/assets/modals/carouselImages/OG-gallery-img(1).png";
import OGCarouselImg2 from "/assets/modals/carouselImages/OG-gallery-img(2).png";
import OGCarouselImg3 from "/assets/modals/carouselImages/OG-gallery-img(3).png";

// import CGLCarouselImg1 from "/assets/modals/carouselImages/CGL-modal-img-01.png";
import CGLCarouselThumb from "/assets/modals/carouselImages/cgl-carousel-thumb.png";
import CGLCarouselImg2 from "/assets/modals/carouselImages/CGL-modal-img-02.png";
import CGLCarouselImg3 from "/assets/modals/carouselImages/CGL-modal-img-03.png";

import OGModalThumb from "/assets/modals/banner-img.webp";
import OGCarouselThumb from "/assets/modals/carouselImages/og-carousel-thumb.png";
import CGLModalThumb from "/assets/modals/CGL-logo.png";

import PersonalProjectsThumb from "/assets/personal-projects-thumb.png";
import OutpostThumb from "/assets/modals/bg-me.png";
import MyLogo from "/assets/headerLogo.png";

// import OPGalleryImg01 from "/assets/modals/carouselImages/op-bg-01.png";
import OPGalleryImg02 from "/assets/modals/carouselImages/op-bg-02.png";
import OPGalleryImg03 from "/assets/modals/carouselImages/op-bg-03.png";
import OPGalleryImg1 from "/assets/modals/carouselImages/op-carousel-thumb.png";

import IldiDevCarouselThumb from "/assets/modals/carouselImages/ildidev-thumb.png";

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
    projectDescription: "This is the OG Creations site",
    galleryImages: [
      OGCarouselThumb,
      OGCarouselImg1,
      OGCarouselImg2,
      OGCarouselImg3,
    ],
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
    projectDescription: "This is the CGL site",
    galleryImages: [CGLCarouselThumb, CGLCarouselImg2, CGLCarouselImg3],
    githubURL: "https://github.com/dvoranii/reCaptchaV2",
    liveDemoURL: "https://cglwebsite.vercel.app/",
  },
  project_3: {
    id: 3,
    title: "Outpost 379 Marketing Agency",
    thumbnail: OutpostThumb,
    techStack: ["JavaScript", "HTML", "CSS"],
    projectDescription: "This is the OP site",
    galleryImages: [OPGalleryImg1, OPGalleryImg02, OPGalleryImg03],
    githubURL: "N/A",
    liveDemoURL: "https://outpost379.com/",
  },
  project_4: {
    id: 4,
    title: "Personal Projects Website",
    thumbnail: PersonalProjectsThumb,
    techStack: ["React", "Vite", "JavaScript", "CSS", "HTML"],
    projectDescription: "This is the Personal projects site",
    galleryImages: [],
    githubURL: "https://github.com/dvoranii/personal-projects-site",
    liveDemoURL: "https://outpost379.com/",
  },
  project_5: {
    id: 5,
    title: "Bonus: Info about this site",
    thumbnail: MyLogo,
    techStack: [
      "React",
      "JavaScript",
      "Vite",
      "Node",
      "Firebase",
      "HTML",
      "CSS",
    ],
    galleryImages: [IldiDevCarouselThumb],
    githubURL: "https://github.com/dvoranii/portfolio-site-react",
    projectDescription: "This is the ildidev site",
    liveDemoURL: "N/A",
    figmaLink:
      "https://www.figma.com/file/LkeTEUFRxx2N3XbVw7KedA/IlDIDEV?type=design&node-id=0-1&mode=design",
  },
};
export default projects;
