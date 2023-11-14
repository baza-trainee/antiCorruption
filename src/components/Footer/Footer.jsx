import { useState } from 'react';
import { Link } from 'react-router-dom';
import { contacts, legalInformation } from '../../constants';
import Button from '../Button/Button';
import PdfViewer from '../PdfViewer/PdfViewer';
import logo from '../../assets/logo.svg';
import './footer.scss';


const Footer = () => {
  const [copiedText, setCopiedText] = useState(null);
  const [showPdf, setShowPdf] = useState(false);
  const [pdfSrc, setPdfSrc] = useState(null);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleCopyOrCall = (item, event) => {
    event.preventDefault();

    if (item.type === 'phone' && window.innerWidth >= 360 && window.innerWidth <= 744) {
      window.location.href = `tel:${item.contact}`;
    } else {
      navigator.clipboard.writeText(item.contact)
        .then(() => {
          setCopiedText(item.contact);
          setTimeout(() => setCopiedText(null), 2000);
        })
        .catch(error => console.error('Помилка копіювання:', error));
    }
  };

  const openPdfInModal = (pdfPath) => {
    setPdfSrc(pdfPath);
    setShowPdf(true);
  };

  const closePdfModal = () => {
    setShowPdf(false);
    setPdfSrc(null);
  };

  return (
    <footer className='footer'>
      <div className='footer__container'>
        <div className='footer__wrap'>
          <div className='footer__logo'>
            <Link to='/' onClick={scrollToTop}>
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <Button className='footer__btn' />
          <ul className='footer__contacts footer__list'>
            {contacts.map((item) => (
              <li
                key={item.id}
                className='footer__contact'
                onClick={(event) => handleCopyOrCall(item, event)}
              >
                {item.type === 'phone' ? (
                  <a href={`tel:${item.contact}`}>{item.contact}</a>
                ) : (
                  <a href={`mailto:${item.contact}`}>{item.contact}</a>
                )}
                {copiedText === item.contact && (
                  <span className='footer__tooltip'>
                    {item.type === 'phone'
                      ? 'Номер телефону скопійовано'
                      : 'Електронну пошту скопійовано'
                    }
                  </span>
                )}
              </li>
            ))}
          </ul>
          <ul className='footer__links footer__list'>
          {legalInformation.map((item) => (
            <li key={item.id} className='footer__link'>
              {item.pdfPath ? (
                <button onClick={() => openPdfInModal(item.pdfPath)}>
                  {item.link}
                </button>
              ) : (
                item.link
              )}
            </li>
          ))}
        </ul>
        </div>
        {showPdf && (
          <PdfViewer pdfPath={pdfSrc} onClose={closePdfModal} />
        )}
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