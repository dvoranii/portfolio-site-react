import "./styles.css";
import TechIconsComponent from "./Components/TechIconsComponent";
import ModalButtonsComponent from "./Components/ModalButtonsComponent";

// import PWALogo from "/assets/pwa-icon.webp";

// prettier-ignore
// eslint-disable-next-line react/prop-types
function ProjectModalComponent({isOpen, onClose, children, techStack,title,description, gitRepo,siteURL}) {
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
          <p>{description}</p>
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
