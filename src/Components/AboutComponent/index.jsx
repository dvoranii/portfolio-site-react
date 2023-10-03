import "./styles.css";
import DevelopmentImg from "/assets/Development.svg";
import DesignImg from "/assets/WebDesignSVG.svg";
import TitleComponent from "../TitleComponent";
import AboutMeImage from "/assets/me.jpg";

function AboutComponent() {
  return (
    // SectionTitle component
    <div className={`about--wrapper`} id="about-me--section">
      <TitleComponent textContent={"About Me"}></TitleComponent>

      <div className={`about-me__intro container`}>
        <div className={`about-me__intro--img-wrapper`}>
          <img src={AboutMeImage}></img>
        </div>
        <div className={`about-me__intro--text-wrapper`}>
          <p>
            I&apos;ve always held the belief that Full Stack developers can make
            some of the best Front End developers, and vice versa. With that in
            mind, I&apos;ve honed my skills in both front-end and back-end
            technologies, enabling me to efficiently plan, architect, and build
            robust web applications tailored to specific requirements. I&apos;m
            proficient in JavaScript, React, Next.js, Node.js, CSS, and HTML and
            I&apos;m also well-versed in tools like Adobe Photoshop, SQL, GIT,
            and AWS. My breadth of skills allows me to grasp the wide landscape
            of web development, reinforcing my approach to both planning and
            executing projects. I enjoy looking at the big picture of web
            applications and understanding how all the moving parts connect from
            user to server, and back. I also maintain a deep passion for the
            intricate details and nuances involved in working with specific
            languages and technologies.
          </p>
        </div>
      </div>
      <div className="about-me__part1">
        <div className="about-me__text-container">
          <h3 className="about-me__part1--header">Front-End Development</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            rerum blanditiis vitae nam, officia facere itaque dolore, eum,
            magnam obcaecati sint veniam iste laboriosam debitis eos! Eos
            adipisci nobis delectus.
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
            loading="lazy"
            alt="Web design image graphic"
          ></img>
        </div>
      </div>

      <div className="about-me__part2">
        <div className={`about-me__img-container part2`}>
          <img
            className="about-me__img--2"
            src={DevelopmentImg}
            loading="lazy"
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
