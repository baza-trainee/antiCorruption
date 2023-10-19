import { contacts, legalInformation } from '../../constants';
import logo from '../../assets/logo.svg';
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__wrap'>
          <div className='footer__logo'>
            <img src={logo} alt="Logo" />
          </div>
          <button className='footer__btn'>
            Підтримати проект
          </button>
          <ul className='footer__contacts footer__list'>
            {contacts.map((item) => (
              <li key={item.id} className='footer__contact'>
                {item.contact}
              </li>
            ))}
          </ul>
          <ul className='footer__links footer__list'>
            {legalInformation.map((item) => (
              <li key={item.id} className='footer__link'>
                {item.link}
              </li>
            ))}
          </ul>
        </div>
        <div className='footer__copyright'>
          <p className='footer__copyright-text'>
            Розробка BazaTraineeUkraine 2023
          </p>
          <span className='footer__copyright-symbol'>&copy;</span>
          <p className='footer__copyright-text'>
            Усі права захищені
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;