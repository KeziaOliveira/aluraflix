import "./Footer.css";
import aluraflixLogo from "../../assets/logo/aluraflix-logo.svg";

function Footer() {
  return (
    <div className="footer">
      <img src={aluraflixLogo} alt="Logo Aluraflix" />
      <div className="credits">
        {/* <h1>Desenvolvido por Kezia Oliveira</h1> */}
      </div>
    </div>
  );
}

export default Footer;
