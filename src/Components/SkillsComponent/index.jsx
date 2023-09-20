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
                <img src={JSLogo}></img>
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
                <img src={CSSLogo}></img>
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
                <img src={HTMLLogo}></img>
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
            <div className={`skill-card skill--4`}>
              <div className={`skill-card--img-wrapper nodeLogo`}>
                <img src={NodeLogo}></img>
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
                <img src={ReactLogo}></img>
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
                <img src={NextLogo}></img>
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
