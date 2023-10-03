import "./styles.css";
import JanssenLogo from "/assets/companies/janssen-logo.png";
import YMCALogo from "/assets/companies/ymca-gta(with-text).png";
import CGLLogo from "/assets/companies/CGL-logo.png";
import OGLogo from "/assets/companies/og-logo.webp";
import AlexionLogo from "/assets/companies/alexion-logo.png";
import NovoLogo from "/assets/companies/novo-logo.png";

function CompaniesComponent() {
  return (
    <div className={`companies--wrapper__outer`}>
      <span>
        {" "}
        Some companies I&apos;ve had the pleasure
        <br className={`desktop-break`} />
        of doing work for:
      </span>
      <div className="companies--wrapper__inner">
        <div className={`img--wrapper img1`}>
          <img src={JanssenLogo} alt="" />
        </div>
        <div className={`img--wrapper img2`}>
          <img src={YMCALogo} alt="" />
        </div>
        <div className={`img--wrapper img3`}>
          <img src={CGLLogo} alt="" />
        </div>
        <div className={`img--wrapper img4`}>
          <div className="img--wrapper__bg">
            <img src={OGLogo} alt="" />
          </div>
        </div>
        <div className={`img--wrapper img5`}>
          <img src={AlexionLogo} alt="" />
        </div>

        <div className="img--wrapper img6">
          <img src={NovoLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CompaniesComponent;
