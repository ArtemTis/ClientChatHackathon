import React from 'react'
import squiggle from '../../assets/squiggle.svg'
import './style.css'

const AdminHello = () => {
   return (
      <div className="manager_first_page">
         <div className="manager_dialog_hello">Хорошего дня!</div>
         <img className="manager_dialog_squiggle" src={squiggle} alt='squiggle' />
      </div>
   )
}

export default AdminHello