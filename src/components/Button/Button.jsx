/* eslint-disable react/prop-types */
import './button.scss'

const Button = ({ className, ...props }) => {
  return (
    <a
      href='https://secure.wayforpay.com/button/bffb1249136b5'
      className={`button ${className}`}
      target="_blank"
      rel="noreferrer"
      {...props}
      >
      Підтримати проєкт
    </a>
  )
}

export default Button