import "./header.scss";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Button from "../Button/Button";
import logoMain from "../../assets/header/logo-main.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="grid-container header-container">

        <a className="header-container__logo" href="/">
          <img
            src={logoMain}
            alt="Logo"
            className="header-container__logo-img"
            width={142}
          />
        </a>
        <div className="header-container__nav">
          <ul className="header-container__nav-list">
            <li className="header-container__nav-list-item">
              <a
                className="header-container__nav-list-item-link"
                href="#home"
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
        <Button className="header-container__button" />

        <BurgerMenu />
      </div>
    </header>
  );
};

export default Header;
