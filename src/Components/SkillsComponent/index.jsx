import "./styles.css";
import TitleComponent from "../TitleComponent";

import JSLogo from "/assets/skillIcons/JS-skills-Card-img.jpg";
// import ViteLogo from "/assets/skillIcons/Vitejs-logo.svg";
import CSSLogo from "/assets/skillIcons/css-3.svg";
import HTMLLogo from "/assets/skillIcons/html-1.svg";
import NodeLogo from "/assets/skillIcons/node.png";
import ReactLogo from "/assets/skillIcons/react-logo.webp";
import NextLogo from "/assets/skillIcons/next-js.svg";

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
                <img
                  src={JSLogo}
                  loading="lazy"
                  alt="javascript logo icon"
                ></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus expedita quaerat facilis aperiam quos beatae vero
                natus amet reiciendis harum, fuga voluptas vel repellat
                laboriosam nemo dignissimos inventore obcaecati? Veritatis.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--2`}>
              <div className={`skill-card--img-wrapper`}>
                <img src={CSSLogo} loading="lazy" alt="css logo icon"></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus expedita quaerat facilis aperiam quos beatae vero
                natus amet reiciendis harum, fuga voluptas vel repellat
                laboriosam nemo dignissimos inventore obcaecati? Veritatis.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--3`}>
              <div className={`skill-card--img-wrapper`}>
                <img src={HTMLLogo} loading="lazy" alt="html logo icon"></img>
              </div>
              <p>
                Proficient in crafting well-structured HTML5 optimized for SEO,
                ensuring both visibility in search engines and compliance with
                AODA/WCAG 2.0 standards for accessibility. Experienced in
                utilizing React/JSX for dynamic web applications, integrating a
                variety of template engines such as Mustache, EJS, and Pug as
                well as developing responsive HTML Emails.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--4`}>
              <div className={`skill-card--img-wrapper nodeLogo`}>
                <img src={NodeLogo} loading="lazy" alt="node logo icon"></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus expedita quaerat facilis aperiam quos beatae vero
                natus amet reiciendis harum, fuga voluptas vel repellat
                laboriosam nemo dignissimos inventore obcaecati? Veritatis.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--5`}>
              <div className={`skill-card--img-wrapper reactLogo`}>
                <img src={ReactLogo} loading="lazy" alt="react logo icon"></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus expedita quaerat facilis aperiam quos beatae vero
                natus amet reiciendis harum, fuga voluptas vel repellat
                laboriosam nemo dignissimos inventore obcaecati? Veritatis.
              </p>
            </div>
          </Tilt>

          <Tilt className="tilt">
            <div className={`skill-card skill--6`}>
              <div className={`skill-card--img-wrapper nextLogo`}>
                <img
                  src={NextLogo}
                  loading="lazy"
                  alt="next js logo icon"
                ></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloribus expedita quaerat facilis aperiam quos beatae vero
                natus amet reiciendis harum, fuga voluptas vel repellat
                laboriosam nemo dignissimos inventore obcaecati? Veritatis.
              </p>
            </div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default SkillsComponent;
