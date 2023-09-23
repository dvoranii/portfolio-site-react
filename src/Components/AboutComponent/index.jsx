import "./styles.css";
import DevelopmentImg from "/assets/Development.svg";
import DesignImg from "/assets/WebDesignSVG.svg";
import TitleComponent from "../TitleComponent";

function AboutComponent() {
  return (
    // SectionTitle component
    <div className="about--wrapper" id="about-me--section">
      <TitleComponent textContent={"About Me"}></TitleComponent>
      <div className="about-me__part1">
        <div className="about-me__text-container">
          <h3 className="about-me__part1--header">Front-End Development</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            ut eligendi? Dolores temporibus ipsa voluptas dicta neque quam iusto
            fuga sit voluptatem dignissimos non sed distinctio, magnam nostrum
            hic repudiandae.
          </p>
          <div className="see-more--link__wrapper--outer">
            <div className="see-more--dash-wrapper">
              <div className="dash"></div>
            </div>
            <div className="see-more--text-wrapper">
              <a className="see-more--link" href="#section1">
                See more
              </a>
            </div>
          </div>
        </div>
        <div className={`about-me__img-container part1`}>
          <img
            className="about-me__img"
            src={DesignImg}
            alt="Web design image graphic"
          ></img>
        </div>
      </div>

      <div className="about-me__part2">
        <div className={`about-me__img-container part2`}>
          <img
            className="about-me__img--2"
            src={DevelopmentImg}
            alt="web development image graphic"
          ></img>
        </div>
        <div className="about-me__text-container">
          <h3 className="about-me__part2--header">Back-End Development</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            ut eligendi? Dolores temporibus ipsa voluptas dicta neque quam iusto
            fuga sit voluptatem dignissimos non sed distinctio, magnam nostrum
            hic repudiandae.
          </p>
          <div className="see-more--link__wrapper--outer">
            <div className="see-more--dash-wrapper">
              <div className="dash"></div>
            </div>
            <div className="see-more--text-wrapper">
              <a className="see-more--link" href="#section1">
                See more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// WebDesignSVG.svg

export default AboutComponent;
