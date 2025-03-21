import React from "react";
import '../Header/header.css';
import headerlogo from '../img/f1_WexLogo-188x66.png';

function Header() {
  return (
    <div className="Header">
      <div className="linkBox">
        <img src={headerlogo} alt="Logo" />
      </div>
    </div>
  );
}

export default Header;
