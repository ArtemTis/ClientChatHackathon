import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import AdminChat from '../Chat/AdminChat';
import './style.css'

const AdminChatsCreated = () => {

   const [chatIsOpen, setChatIsOpen] = useState(false);

   const chatOpen = () => {
      setChatIsOpen(() => !chatIsOpen)
   }

   let location = useLocation();
   let tab = location.pathname.split('/').splice(-1)[0];
   const activeTab = (location) => {
      if (location === 'active') return 'chatBox_session active_session';
      else if (location === 'created') return 'chatBox_session created_session';
      else if (location === 'closed') return 'chatBox_session closed_session';
   }

   return (
      <>
         {chatIsOpen
            ?
            <AdminChat isOpen={setChatIsOpen} />
            :
            (
               <div className={activeTab(tab)}>
                  <div className="chatBoxChild">
                     <div className="chatMessage" onClick={() => chatOpen()}>
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                     <div className="chatMessage">
                        <p className="message">Hello</p>
                     </div>
                  </div>
               </div>
            )
         }
      </>
   )
}

export default AdminChatsCreated