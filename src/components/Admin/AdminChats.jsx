import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminChats = () => {
   return (
      <div class="chatBox_session active_session">
         <div class="chatBoxChild">
            <Outlet />
         </div>
      </div>
   )
}

export default AdminChats