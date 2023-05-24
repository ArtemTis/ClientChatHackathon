import React from 'react'
import './style.css'
import { Link, Outlet } from 'react-router-dom'
import { ADMIN_CHATS_ACTIVE_PATH, ADMIN_CHATS_CLOSED_PATH, ADMIN_CHATS_CREATED_PATH, ADMIN_CHATS_PATH } from '../../utils/routeConstants'

const Admin = () => {
   return (
      <>
         <header className='main_manager'>
            <Link to='/'>
               <div className='main_manager_rowi'>
                  ROWI
               </div>
            </Link>
            <div className='main_manager_name'>
               Фамилия Имя Отчество
            </div>
         </header>

         <div className="manager_sessions">
            <div className="childButton">
               <Link to={`./${ADMIN_CHATS_PATH}/${ADMIN_CHATS_CREATED_PATH}`} className="session__button created">Созданные</Link>
            </div>
            <div className="childButton">
               <Link to={`./${ADMIN_CHATS_PATH}/${ADMIN_CHATS_ACTIVE_PATH}`} className="session__button active">Активные</Link>
            </div>
            <div className="childButton">
               <Link to={`./${ADMIN_CHATS_PATH}/${ADMIN_CHATS_CLOSED_PATH}`} className="session__button closed">Завершённые</Link>
            </div>
         </div>

         <Outlet />
      </>
   )
}

export default Admin