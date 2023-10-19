import React from "react";
import "./header.scss";
import burgerOpen from "../../assets/header/burger-menu.svg";
import logoMain from "../../assets/header/logo-main.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="grid-container header-container">
        <a className="header-container__logo" href="/index.html">
          <img
            src={logoMain}
            alt="Logo"
            className="header-container__logo-img"
            width={87}
          />
        </a>
        <div className="header-container__nav">
          <ul className="header-container__nav-list">
            <li className="header-container__nav-list-item">
              <a
                className="header-container__nav-list-item-link"
                href="#corruption"
              >
                Це корупція
              </a>
            </li>
            <li className="header-container__nav-list-item">
              <a
                className="header-container__nav-list-item-link"
                href="#counteract"
              >
                Як протидіяти корупції
              </a>
            </li>
          </ul>
        </div>
        <a className="header-container__button" href="/">
          Підтримати проект
        </a>

        <img src={burgerOpen} alt="Open" className="header-container__burger" />
      </div>
    </header>
  );
};

export default Header;
