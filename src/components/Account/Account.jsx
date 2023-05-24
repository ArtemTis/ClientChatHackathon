import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Account.css';
import arrow from '../../assets/Arrow.svg'


const Account = () => {
   return (
      <>
         <div className="back-arrow">
            <Link to="/" className='back-arrow-link'>
               <img src={arrow} alt="back arrow" />
               <span className="back-text">Назад</span>
            </Link>
         </div>
         <div className='account container'>
            <div className="account-logo">
               <Link to='/'>
                  <h1 className='account-logo__text'>ROWI</h1>
               </Link>
               <h4 className='account-descript'>Финансирование <br /> бизнеса</h4>
            </div>
            <div className="account-auth">
               <Outlet />

            </div>
            <span className="account-gradient"></span>
         </div>
      </>
   )
}

export default Account