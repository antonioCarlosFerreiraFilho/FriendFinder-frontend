import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="Footer-container-logo">
          <img src="/Logo/logo-black.png" alt="Logo" />
        </div>
        <div className="Footer-container-alert-containerAll">
          <div className="Footer-container-alert">
            <div className="Footer-container-alert-logo">
              <img src="/Background/2299283.png" alt="" />
            </div>

            <div className="Footer-container-alert-content">
              <div className="Footer-container-alert-content-box">
                <p>
                  Este site/projeto foi desenvolvido como foco constar no
                  Portifólio sem fins lucrativos de código aberto no GitHub.
                </p>
              </div>
            </div>
          </div>

          <div className="Footer-container-alert-Developer-GitHub">
            <div className="Footer-container-alert-Developer-GitHub-Developer">
              <p>desenvolvido por:</p>
              <h1>Antonio Carlos F. F.</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
