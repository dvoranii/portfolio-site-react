import "./styles.css";
import LaptopHeader from "/assets/LaptopHeader.svg";

function HeroComponent() {
  return (
    <div className="hero--wrapper">
      <div className={`hero--inner container`}>
        <div className="hero--intro-text__wrapper">
          <h1>Ildi&nbsp;Dvorani</h1>
          <h2>Full&nbsp;Stack&nbsp;Developer</h2>
          <p>Welcome to my portfolio website...</p>
          <div className="hero-btns">
            <a href="#projects">
              <button className={`custom-btn btn-3`} id="projects-btn">
                <span>Projects</span>
              </button>
            </a>
            <a href="#services">
              <button className={`custom-btn btn-3`} id="services-btn">
                <span>Services</span>
              </button>
            </a>
          </div>
        </div>
        <div className="hero--img__wrapper--outer">
          <div className="hero--img__wrapper--inner">
            <img src={LaptopHeader}></img>
          </div>
        </div>
      </div>
      <div className="waves-container">
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FCFCFC" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default HeroComponent;
