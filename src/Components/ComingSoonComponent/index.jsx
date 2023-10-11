import "./styles.css";
import RippedPaperBG from "/assets/coming-sooon-ripped-fixed.png";

function ComingSoonComponent() {
  return (
    <div className={`container coming-soon--wrapper__outer`}>
      <img className={`ripped-paper-bg`} src={RippedPaperBG}></img>
      <div className="title-wrapper">
        <h2>Coming Soon</h2>
      </div>
    </div>
  );
}

export default ComingSoonComponent;
