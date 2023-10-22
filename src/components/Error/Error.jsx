import './error.scss';
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='page404'>
     <div className='page404__content'>
      <div>
        <img 
          className='page404__image'
          src="./src/assets/error/image-404.png" 
          alt="404" />
      </div>
      <div className='page404__description'>
        У-у-упс... Сталася помилка - ми не можемо знайти сторінку. Тому пропонуємо Вам повернутись на Головну, поки ми усуваємо несправності
      </div>
      <div className='page404__button'>
          <Link className='page404__link' to='/'>Повернутись на Головну</Link>
      </div>
     </div>
    </div>
  )
}

export default Error