import "./styles.css";
import TechIconsComponent from "./Components/TechIconsComponent";
import ModalButtonsComponent from "./Components/ModalButtonsComponent";

function ProjectModalComponent({
  isOpen,
  onClose,
  children,
  techStack,
  title,
  gitRepo,
  siteURL,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className={`close--btn`} onClick={onClose}>
          ×
        </button>
        <div className="img-wrapper">{children}</div>

        <div className={`modal-info--wrapper`}>
          <h1>{title}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            placeat ut doloribus impedit facilis beatae in molestiae quaerat
            eos, corporis delectus eligendi saepe tempore asperiores aliquid ea
            quisquam numquam vel.
          </p>
          <div className={`tech-icons--wrapper`}>
            {techStack && <TechIconsComponent icons={techStack} />}
          </div>
          <ModalButtonsComponent gitRepo={gitRepo} siteURL={siteURL} />
        </div>
      </div>
    </div>
  );
}

export default ProjectModalComponent;
