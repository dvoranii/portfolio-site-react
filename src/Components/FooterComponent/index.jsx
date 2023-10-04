import "./styles.css";
import FooterLogo from "/assets/footer-logo.png";

import GithubLogo from "/assets/logo-github.svg";
import LinkedInLogo from "/assets/logo-linkedin.svg";
import CodepenLogo from "/assets/logo-codepen.svg";
function FooterComponent() {
  return (
    <div className={`footer--wrapper__outer`}>
      <div className="footer--wrapper__inner">
        <div className="footer--left-side">
          <div className="left-side--img-wrapper">
            <img src={FooterLogo} alt="" />
          </div>
          <p>
            ILDIDEV<sup>&reg; </sup>2023 - <i>All rights reserved</i>
          </p>
        </div>
        <div className="footer--right-side">
          <div className="nav-list--container">
            <div className="nav-title--container">
              <h3 className={`nav-title`}>Navigation</h3>
            </div>

            <ul className={`footer--nav-list`}>
              <li>Home</li>
              <li>About Me</li>
              <li>My Skills</li>
              <li>My Projects</li>
              <li></li>
            </ul>
          </div>

          <div className="socials-list--container">
            <div className="socials-title--container">
              <h3 className={`socials-title`}>Socials</h3>
            </div>

            <ul className={`footer--socials-list`}>
              <li className="footer-gh-list-item">
                <img className="footer-gh-logo" src={GithubLogo}></img>
                Github
              </li>
              <li>
                <img src={LinkedInLogo}></img>LinkedIn
              </li>
              <li>
                <img src={CodepenLogo}></img>Codepen
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FooterComponent;
