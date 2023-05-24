import React from 'react'
import { Link } from 'react-router-dom'
import { LOGIN_PATH } from '../../utils/routeConstants'

const Register = () => {
   return (
      <div><div className="form-auth">
         <h2 className='form-name'>Регистрация</h2>
         <form className='login-form'>
            <input className='form-input' type="text" placeholder='Name' />
            <input className='form-input' type="tel" placeholder='Phone' />
            <input className='form-input' type="email" placeholder='Email' />
            <input className='form-input' type="password" placeholder='Password' />
            <button className='form-button' type='submit'>Зарегистрироваться</button>
         </form>
         <span className='login-description'>Уже есть аккаунт?&ensp;
            <Link to={`../${LOGIN_PATH}`} className='login-description-link'>Войти</Link>
         </span>
      </div></div>
   )
}

export default Register