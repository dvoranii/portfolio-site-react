import "./global.css";
import NavComponent from "./Components/NavComponent";
import HeroComponent from "./Components/HeroComponent";

function App() {
  return (
    <>
      <div className="project--wrapper__outer">
        <NavComponent></NavComponent>
        <HeroComponent></HeroComponent>
      </div>
    </>
  );
}

export default App;
