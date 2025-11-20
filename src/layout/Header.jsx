import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="icons">
        <img
          src="https://api.idda.az/resized/resize392/center/pages/1/iria-ufuqi-mavi.png"
          alt="logo-header"
        />
        <div
          style={{
            width: "1px",
            height: "36px",
            backgroundColor: "black",
          }}
        ></div>
        <img
          src="https://api.idda.az/resized/resize392/center/pages/1/logo-15-1.png"
          alt="logo-2"
        />
      </div>

      <div className={`links ${open ? "open" : ""}`}>
        <Link to="/haqqimizda">Haqqımızda</Link>
        <Link to="/fealiyyet">Fəaliyyətimiz</Link>
        <Link to="/xeberler">Xəbərlər</Link>
        <Link to="/karyera">Karyera</Link>
        <Link to="/elaqe">Əlaqə</Link>
      </div>

      <div className="right">
        <button type="search">
          <IoIosSearch />
        </button>
        <button className="burger" onClick={() => setOpen(!open)}>
          {open ? <IoMdClose  size={24} /> : <IoIosMenu size={24} />
        }
        </button>
      </div>
    </header>
  );
};

export default Header;
