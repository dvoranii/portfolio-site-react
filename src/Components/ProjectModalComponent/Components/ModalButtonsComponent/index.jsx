import "./styles.css";
import GithubLogo from "/assets/logo-github.svg";
import WebsiteIcon from "/assets/modals/website-icon.png";

// eslint-disable-next-line react/prop-types
function ModalButtonsComponent({ gitRepo, siteURL }) {
  return (
    <>
      <div className="btns--wrapper__outer">
        <div className="btns--wrapper__inner">
          <div className={`btn--1__wrapper--inner`}>
            <a href={gitRepo} target="_blank" rel="noopener noreferrer">
              <button>
                <img src={GithubLogo}></img>Repo
              </button>
            </a>
          </div>

          <div className={`btn--2__wrapper--inner`}>
            <a href={siteURL} target="_blank" rel="noopener noreferrer">
              <button>
                <img src={WebsiteIcon}></img>
                Live Site
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalButtonsComponent;
