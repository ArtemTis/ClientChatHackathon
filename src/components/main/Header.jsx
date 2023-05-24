import React from 'react'
import { Link } from 'react-router-dom'
import { ACCOUNT_PATH, ADMIN_PATH } from '../../utils/routeConstants'
import logo from '../../assets/images/logo-desktop.svg'

const Header = () => {
   return (
      <header className='header-main'>
         <div className="header-logo">
            <img src={logo} alt="ROWI logo" className='header-logo__ROWI' />
         </div>

         <div className="account-block">
            <Link className="account__button" to={ADMIN_PATH}>
               Админ панель
            </Link>
            <Link className="account__button" to={ACCOUNT_PATH}>
               Личный кабинет
            </Link>
         </div>
      </header>
   )
}

export default Header