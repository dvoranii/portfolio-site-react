import "./styles.css";
import DevelopmentImg from "/assets/Development.svg";

function AboutComponent() {
  return (
    // SectionTitle component
    <div className="about--wrapper">
      <div className="about-title-container">
        <div className="about-title-container-inner">
          <h2 className="about-title">About Me</h2>
        </div>
      </div>

      <div className="about-me__part1">
        <div className="about-me__text-container">
          <h3 className="about-me__part1--header">Front-End Development</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
            ut eligendi? Dolores temporibus ipsa voluptas dicta neque quam iusto
            fuga sit voluptatem dignissimos non sed distinctio, magnam nostrum
            hic repudiandae.
          </p>
          <a href="#section1">See more</a>
        </div>
        <div className="about-me__img-container">
          <img className="about-me__img" src={DevelopmentImg}></img>
        </div>
      </div>
    </div>
  );
}

export default AboutComponent;
