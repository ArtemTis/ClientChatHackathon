import React from 'react'
import { Link } from 'react-router-dom'
import { REGISTER_PATH } from '../../utils/routeConstants'

const Login = () => {
   return (
      <div className="form-auth">
         <h2 className='form-name'>Авторизация</h2>
         <form className='login-form'>
            <input className='form-input' type="email" placeholder='Email' />
            <input className='form-input' type="password" placeholder='Password' />
            <button className='form-button' type='submit'>Войти</button>
         </form>
         <span className='login-description'>Нет аккаунта?&ensp;
            <Link to={`../${REGISTER_PATH}`} className='login-description-link'>Регистрация</Link>
         </span>
      </div>
   )
}

export default Login