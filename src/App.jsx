import "./global.css";
import NavComponent from "./Components/NavComponent";
import HeroComponent from "./Components/HeroComponent";
import AboutComponent from "./Components/AboutComponent";
import SkillsComponent from "./Components/SkillsComponent";
import ProjectsComponent from "./Components/ProjectsComponent";

function App() {
  return (
    <>
      <div className="project--wrapper__outer">
        <NavComponent></NavComponent>
        <HeroComponent></HeroComponent>
        <AboutComponent></AboutComponent>
        <SkillsComponent></SkillsComponent>
        <ProjectsComponent></ProjectsComponent>
      </div>
    </>
  );
}

export default App;
