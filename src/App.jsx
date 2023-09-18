import "./global.css";
import NavComponent from "./Components/NavComponent";
import HeroComponent from "./Components/HeroComponent";
import AboutComponent from "./Components/AboutComponent";

function App() {
  return (
    <>
      <div className="project--wrapper__outer">
        <NavComponent></NavComponent>
        <HeroComponent></HeroComponent>
        <AboutComponent></AboutComponent>
      </div>
    </>
  );
}

export default App;
