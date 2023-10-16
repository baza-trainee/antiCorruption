import React, { useState } from "react";
import burgerOpen from "../../assets/burgerMenu/burgerOpen.svg";
import burgerClose from "../../assets/burgerMenu/burgerClose.svg";
import "./BurgerMenu.scss";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="burger-menu">
      <button className="burger-menu__button" onClick={toggleMenu}>
        {isOpen ? (
          <img
            src={burgerClose}
            alt="Close"
            className="burger-menu__icon_close"
          />
        ) : (
          <img src={burgerOpen} alt="Open" className="burger-menu__icon_open" />
        )}
      </button>

      {isOpen && (
        <div className="menu-container">
          <ul className="menu-container__list">
            <li className="menu-container__item">
              <a href="#home" className="menu-container__link">
                Це корупція
              </a>
              <hr />
            </li>
            <li className="menu-container__item">
              <a href="#counteract" className="menu-container__link">
                Як протидіяти корупції
              </a>
              <hr />
            </li>
          </ul>
          <a className="support-button">Підтримати проект</a>
        </div>
      )}
    </nav>
  );
};

export default BurgerMenu;
