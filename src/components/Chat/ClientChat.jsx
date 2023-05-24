import React, { useState } from 'react'
import "./Chat.css"
import sendBtn from '../../assets/send.svg'
import close from '../../assets/close.svg'
import { Link } from 'react-router-dom';
import { ACCOUNT_PATH } from '../../utils/routeConstants';
import { useDispatch, useSelector } from 'react-redux';
import { addMessageClient } from '../../utils/redux/chatSlice'

const ClientChat = ({ isOpen }) => {

   const messages = useSelector((state) => state.chatReducer.messages);
   // const isAuthorised = useSelector(selectIsAuthorised);
   const isAuthorised = true;
   const dispatch = useDispatch()

   const [title, setTitle] = useState('');

   const sendMessage = () => {
      dispatch(addMessageClient(title))
      setTitle('');
   }

   return (
      <div className='client-chat__wrapper'>
         <div className="client-chat__cross-close" onClick={() => isOpen(() => false)}>
            <img src={close} alt="close cross" />
         </div>

         <div className='client-chat'>

            <div className="client-chat-header">
               Чат поддержки
            </div>
            <div className="client-chat-dialog">
               {
                  isAuthorised
                     ? <div className='chat-messages'>

                        {
                           messages.map((element) => {
                              if (element.completed) {
                                 return (
                                    <div className='message' key={element.id}>
                                       <span className="message-author">Менеджер</span>
                                       <div className="message-text">{element.title}</div>
                                    </div>
                                 )
                              } else {
                                 return (
                                    <div className='message client-message' key={element.id}>
                                       <span className="message-author">Клиент</span>
                                       <div className="message-text client-text">{element.title}</div>
                                    </div>
                                 )
                              }
                           })
                        }

                     </div>
                     : <p className='client-register-text'>
                        Чтобы задать вопрос, пожалуйста, зарегистрируйтесь или авторизируйтесь в системе
                     </p>
               }
            </div>
            <div className="client-chat-input">
               {
                  isAuthorised
                     ? <div className='chat-block'>
                        <input className='chat-input'
                           type="text"
                           value={title}
                           onChange={e => setTitle(e.target.value)} 
                           placeholder='Введите ваше сообщение'/>
                        <button
                           className='send-button'
                           onClick={sendMessage}
                        ><img src={sendBtn} className='send-message-icon' alt="send button" /></button>
                     </div>
                     : <Link to={ACCOUNT_PATH} className='client-chat__button'>Войти</Link>
               }
            </div>
         </div>
      </div>
   )
}

export default ClientChat