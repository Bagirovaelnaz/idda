import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="c-1">
        <div className="logos">
          <img
            src="https://idda.az/assets/img/footer/idda-logo.svg"
            alt="logo-header"
          />
          <div
            style={{
              width: "1px",
              height: "36px",
              backgroundColor: "white",
            }}
          ></div>
          <img
            src="https://idda.az/assets/img/footer/digi-aze-logo.svg"
            alt="logo-2"
          />
        </div>

        <h2>
          Azərbaycanın <br /> rəqəmsal <br />
          gələcəyini <br /> qururuq
        </h2>
      </div>

      <div className="columns">
        <div className="column-items">
          <Link to="/haqqimizda">Haqqımızda</Link>
          <Link to="/fealiyyet">Agentlik</Link>
          <Link to="/xeberler">Hesabat</Link>
          <Link to="/karyera">Rəhbərlik</Link>
          <Link to="/elaqe">Qanunvericilik</Link>
          <Link to="/elaqe">Məxfilik siyasəti</Link>
        </div>
        <div>
          <Link to="/haqqimizda">Media</Link>
          <Link to="/fealiyyet">Xəbərlər</Link>
        </div>{" "}
        <div>
          <Link to="/haqqimizda">Karyera</Link>
          <Link to="/fealiyyet">Vakansiyalar</Link>
        </div>
        <div>
          <Link to="/haqqimizda">Innovasiya</Link>
          <Link to="/fealiyyet">aim</Link>
          <Link to="/xeberler">Texnopark</Link>
          <Link to="/karyera">IDDA Awards</Link>
          <Link to="/elaqe">Roadshow</Link>
        </div>
        <div>
          <Link to="/haqqimizda">Rəqəmsallaşma</Link>
          <Link to="/fealiyyet">mygov</Link>
          <Link to="/xeberler">digital.bridge</Link>
          <Link to="/karyera">digital.finance</Link>
          <Link to="/elaqe">RSD</Link>
          <Link to="/elaqe">DigiMate</Link>
          <Link to="/elaqe">mygov ID</Link>
        </div>
        <div>
          <Link to="/haqqimizda">Rəqəmsal səriştələr</Link>
          <Link to="/fealiyyet">Technest</Link>
          <Link to="/xeberler">CyberEdu</Link>
          <Link to="/karyera">Rəhbər şəxslər</Link>
          <Link to="/elaqe">Holberton School</Link>
        </div>
      </div>
      <div className="last-column">
        <div>Ölkədaxili zənglər üçün</div>
        <span>
          <img src="https://idda.az/assets/img/call-icon.svg" alt="" />
          883
        </span>
        <p>
          Ünvan: Atatürk prospekti <br />
          89 Bakı, <br /> Azərbaycan / AZ1069
        </p>
      </div>
    </footer>
  );
};

export default Footer;
