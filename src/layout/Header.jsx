import React from "react";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header>
      <div className="icons">
        <img
          src="https://api.idda.az/resized/resize392/center/pages/1/iria-ufuqi-mavi.png"
          alt="logo-header"
        />
        <div
          style={{
            width: "1px",
            height: "36px",
            padding: "0px",
            backgroundColor: "black",
          }}
        ></div>
        <img
          src="https://api.idda.az/resized/resize392/center/pages/1/logo-15-1.png"
          alt="logo-2"
        />
      </div>
      <div className="links">
        <Link to="/haqqimizda">Haqqımızda</Link>
        <Link to="/fealiyyet">Fəaliyyətimiz</Link>
        <Link to="/xeberler">Xəbərlər</Link>
        <Link to="/karyera">Karyera</Link>
        <Link to="/elaqe">Əlaqə</Link>
      </div>
      <div>
        <button type="search">
          <IoIosSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
