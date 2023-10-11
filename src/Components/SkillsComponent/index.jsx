import "./styles.css";
import TitleComponent from "../TitleComponent";

import JSLogo from "/assets/skillIcons/JS-skills-Card-img.jpg";
import ViteLogo from "/assets/skillIcons/Vitejs-logo.svg";
import CSSLogo from "/assets/skillIcons/css-3.svg";
import HTMLLogo from "/assets/skillIcons/html-1.svg";
import NodeLogo from "/assets/skillIcons/node.png";
import ReactLogo from "/assets/skillIcons/react-logo.webp";
// import NextLogo from "/assets/skillIcons/next-js.svg";
import GoogleFBLogo from "/assets/skillIcons/firebase-modal.png";
import PhotoshopLogo from "/assets/skillIcons/Adobe-Photoshop-Logo.png";
import SQLLogo from "/assets/skillIcons/SQL-LOGO-2.jpg";

import Tilt from "react-vanilla-tilt";

function SkillsComponent() {
  return (
    <div id="skills--section">
      <TitleComponent textContent={"My Skills"}></TitleComponent>
      <div className={`skills--wrapper__outer`}>
        <div className={`skills--wrapper__inner container`}>
          <Tilt className="tilt">
            <div className={`skill-card skill--1`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>JavaScript</h4>
                <img
                  src={JSLogo}
                  loading="lazy"
                  alt="javascript logo icon"
                  title="JavaScript"
                  className={`js-skill-logo`}
                ></img>
              </div>
              <p>
                Mastering the power and flexibility of JavaScript to build
                dynamic and interactive web applications. I sometimes also
                leverage TypeScript for its type safety in some of my
                applications, enhancing code reliability, maintainability and
                reducing technical debt.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--5`}>
              <div className={`skill-card--img-wrapper reactLogo`}>
                <h4>React</h4>
                <img
                  src={ReactLogo}
                  loading="lazy"
                  alt="react logo icon"
                  title="React"
                ></img>
              </div>
              <p>
                Utilizing React to develop modular, component-driven user
                interfaces, employing hooks, context, and advanced features.
                Continuously re-evaluating the bounds of granularity when
                fleshing out new components.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--4`}>
              <div className={`skill-card--img-wrapper nodeLogo`}>
                <h4>Node</h4>
                <img
                  src={NodeLogo}
                  loading="lazy"
                  alt="node logo icon"
                  title="Node"
                ></img>
              </div>
              <p>
                Using Node.js for server-side logic, incorporating middleware
                solutions, and building scalable backend services. Ensuring
                efficient data flows in web applications.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--7`}>
              <div className={`skill-card--img-wrapper firebaseLogo`}>
                <h4>Vite</h4>
                <img
                  src={ViteLogo}
                  loading="lazy"
                  alt="Vite logo"
                  title="Vite"
                ></img>
              </div>
              <p>
                Harnessing the power of Vite for its lightning-fast build
                system, making web development more efficient and enjoyable.
                Capitalizing on its out-of-the-box features for ES modules,
                enabling better developer experience, and faster hot module
                replacement.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--2`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>CSS</h4>
                <img
                  src={CSSLogo}
                  loading="lazy"
                  alt="css logo icon"
                  title="CSS"
                  className={`css-skill-logo`}
                ></img>
              </div>
              <p>
                Employing CSS to design visually appealing, responsive layouts.
                With advanced knowledge of CSS, I reduce reliance on JavaScript,
                optimizing performance and ensuring design consistency.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--3`}>
              <div className={`skill-card--img-wrapper`}>
                <h4>HTML</h4>
                <img
                  src={HTMLLogo}
                  loading="lazy"
                  alt="html logo icon"
                  title="HTML"
                  className={`html-skill-logo`}
                ></img>
              </div>
              <p>
                Crafting SEO-optimized HTML code compliant with AODA/WCAG 2.0
                standards. Skilled in React/JSX, template engines like EJS, Pug,
                and creating responsive HTML Emails and banner ads.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--9`}>
              <div className={`skill-card--img-wrapper firebaseLogo`}>
                <h4>SQL</h4>
                <img
                  src={SQLLogo}
                  loading="lazy"
                  alt="SQL Logo"
                  title="SQL"
                  className={`sql-skill-logo`}
                ></img>
              </div>
              <p>
                Familiar with the foundations of SQL to manage and interact with
                relational databases. Capable of writing basic to intermediate
                queries and ensuring data consistency.
              </p>
            </div>
          </Tilt>
          <Tilt className="tilt">
            <div className={`skill-card skill--6`}>
              <div className={`skill-card--img-wrapper firebaseLogo`}>
                <h4>Google Firebase</h4>
                <img
                  src={GoogleFBLogo}
                  loading="lazy"
                  alt="google firebase logo icon"
                  title="Firebase"
                ></img>
              </div>
              <p>
                Leveraging Google Firebase for its quick setup, intuitive UI,
                and SDK. Implementing real-time databases and user
                authentication to streamline web application infrastructure and
                deployment.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--8`}>
              <div className={`skill-card--img-wrapper firebaseLogo`}>
                <h4>Photoshop</h4>
                <img
                  src={PhotoshopLogo}
                  loading="lazy"
                  alt="photoshop logo"
                  title="Photoshop"
                  className={`ps-skill-logo`}
                ></img>
              </div>
              <p>
                Skilled in using Photoshop for web design and asset creation.
                Expertise in manipulating images, optimizing graphics for web,
                and ensuring visual consistency across digital platforms.
                Combining an artistic eye with technical proficiency to create
                visually compelling content for web users.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
