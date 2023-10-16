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
    projectDescription:
      "I developed and designed the inaugural website for OG Creations Recording Studio, introducing a new digital channel for the studio. The site features a straightforward online sales funnel, contact forms integrated with Google Firebase, a bespoke design tailored to the studio's brand, and a functional UI ensuring user-friendliness across devices. This project highlights my proficiency in both development and design",
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
    projectDescription: `In the beta phase, currently deployed on Vercel, I spearheaded the development of an interactive website for Canadian Global Logistics. The highlight of the site is an immersive 3D-rendered spinning globe for the hero section. The website boasts advanced styling, user interactivity, and a responsive design. Incorporated are meticulously validated and sanitized forms for quote requests and contacts. This project emphasizes my capability to combine aesthetic design with functionality for a major logistics firm`,
    galleryImages: [CGLCarouselThumb, CGLCarouselImg2, CGLCarouselImg3],
    githubURL: "https://github.com/dvoranii/reCaptchaV2",
    liveDemoURL: "https://cglwebsite.vercel.app/",
  },
  project_3: {
    id: 3,
    title: "Outpost 379 Marketing Agency",
    thumbnail: OutpostThumb,
    techStack: ["JavaScript", "HTML", "CSS"],
    projectDescription:
      "At Outpost379, I collaborated closely with the lead developer, UX designers, and client services team to execute various client projects. Additionally, I played an instrumental role in updating and maintaining the company's primary website, ensuring its responsiveness and user-friendly interface. My involvement in these projects not only underscores my adaptability in team settings but also highlights my ability to create and manage streamlined digital platforms",
    galleryImages: [OPGalleryImg1, OPGalleryImg02, OPGalleryImg03],
    githubURL: "N/A",
    liveDemoURL: "https://outpost379.com/",
  },
  project_4: {
    id: 4,
    title: "Personal Projects Website",
    thumbnail: PersonalProjectsThumb,
    techStack: ["React", "Vite", "JavaScript", "CSS", "HTML"],
    projectDescription:
      "I built a website to host and display my personal projects. This site gives a glimpse into the different projects I've worked on, showing my range as a developer. It's designed to be easy for visitors to navigate and see my work in a clear and straightforward way.",
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
    projectDescription:
      "I designed and developed this portfolio site to showcase my work and experiences. It began with a simple design in Figma and was brought to life using modern web technologies. To enhance user experience, the site is also set up as a Progressive Web App, ensuring offline access and improved performance. The integrated service worker manages assets for optimal loading, and a script helps automate the updating process, ensuring everything stays current.",
    liveDemoURL: "N/A",
    figmaLink:
      "https://www.figma.com/file/LkeTEUFRxx2N3XbVw7KedA/IlDIDEV?type=design&node-id=0-1&mode=design",
  },
};
export default projects;
