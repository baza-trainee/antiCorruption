import React from "react";
import "./header.scss";

const Header = () => {
  return (
    <div className="grid-container header-container">
      <a className="header-container-logo" href="/index.html">
        <img className="header-container-logo-img" src="./src/components/Header/logo.png" alt="logo" width={87}/>
      </a>
      <div className="header-container-info">
      <ul className="header-container-info-list">
        <li className="header-container-info-list-item">
          <a className="header-container-info-list-item-link" href="/">
            Це корупція
          </a>
        </li>
        <li className="header-container-info-list-item">
          <a className="header-container-info-list-item-link" href="/">
            Як протидіяти корупції
          </a>
        </li>
      </ul>
      <a className="header-container-info-button" href="/">
        Підтримати проект
      </a>
      </div>
      <img className="header-container-burger" src="./src/components/Header/burger-menu-img.png" width={40} />
      {/* <svg className="header-burger">
        <use href="/src/components/Header/burger-menu.svg"></use>
      </svg> */}
    </div>
  );
};

export default Header;
