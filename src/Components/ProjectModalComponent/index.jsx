import "./styles.css";
import TechIconsComponent from "./Components/TechIconsComponent";

// eslint-disable-next-line react/prop-types
function ProjectModalComponent({ isOpen, onClose, children, techStack }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="img-wrapper">{children}</div>

        <div className={`modal-info--wrapper`}>
          <h1>Title</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            placeat ut doloribus impedit facilis beatae in molestiae quaerat
            eos, corporis delectus eligendi saepe tempore asperiores aliquid ea
            quisquam numquam vel.
          </p>
          <div className={`tech-icons--wrapper`}>
            {techStack && <TechIconsComponent icons={techStack} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModalComponent;
