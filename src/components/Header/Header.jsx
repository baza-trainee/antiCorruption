import React from "react";
import "./header.scss";
import burgerOpen from "../../assets/header/burger-menu.svg";

const Header = () => {
  return (
    <div className="header-container">
      <a className="header-container-logo" href="/index.html">
        <img
          className="header-container-logo-img"
          src="src/assets/header/logo.png"
          alt="logo"
          width={88}
        />
      </a>
      <div className="header-container-nav">
        <ul className="header-container-nav-list">
          <li className="header-container-nav-list-item">
            <a className="header-container-nav-list-item-link" href="#corruption">
              Це корупція
            </a>
          </li>
          <li className="header-container-nav-list-item">
            <a className="header-container-nav-list-item-link" href="#counteract">
              Як протидіяти корупції
            </a>
          </li>
        </ul>
      </div>
      <a className="header-container-button" href="/">
        Підтримати проект
      </a>

      <img src={burgerOpen} alt="Open" className="header-container-burger" />
    </div>
  );
};

export default Header;
