import React, { useState } from 'react'
import send from '../../assets/send.svg'
import '../Admin/style.css'
import arrow from '../../assets/Arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessageManager } from '../../utils/redux/chatSlice'

const AdminChat = ({ isOpen }) => {

   const [title, setTitle] = useState('');
   const dispatch = useDispatch()

   const sendMessage = () => {
      dispatch(addMessageManager(title))
      setTitle('');
   }

   const messages = useSelector((state) => state.chatReducer.messages);

   return (
      <>
         <div className="admin-chat__cross-close" onClick={() => isOpen(() => false)}>
            <img src={arrow} alt="close cross" />
         </div>

         <div className="chatBoxChild modal-chat">
            <div className="manager_active_dialog message">

               {
                  messages.map((element, index) => {
                     if (element.completed) {
                        return (
                           <div className="managerMessages" key={element.id}>
                              <div className="message_manager">{element.title}</div>
                           </div>
                        )
                     } else {
                        return (
                           <div className="clientsMessages" key={element.id}>
                              <div className="message_client">{element.title}</div>
                           </div>
                        )
                     }
                  })
               }

            </div>


         </div>
         <div className="chatBox_active_send">
            <input className="manager_message__input"
               placeholder='Введите сообщение' 
               value={title}
               onChange={e => setTitle(e.target.value)} />
            <img
               className='manager_send_massage'
               src={send} 
               alt='send message '
               onClick={sendMessage}
            />
         </div>
      </>
   )
}

export default AdminChat