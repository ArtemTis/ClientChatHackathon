import React, { useEffect, useState } from 'react'
import './Main.css'
import './Base.css'
import chatButton from '../../assets/images/chatButton.svg'
import Header from './Header'
import Home from './Home'
import About from './About'
import Services from './Services'
import Clients from './Clients'
import Footer from './Footer'
import ClientChat from '../Chat/ClientChat'
import { useDispatch } from 'react-redux'
import { fetchChat } from '../../utils/redux/chatSlice'

const Root = () => {
   const [chatIsOpen, setChatIsOpen] = useState(false);

   const chatOpen = () => {
      setChatIsOpen(() => !chatIsOpen)
   }

   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChat())
  }, [dispatch])

   return (
      <>
         <Header />
         <Home />

         <About />
         <Services />
         <Clients />
         <Footer />

         {chatIsOpen
            ?
            <ClientChat isOpen={setChatIsOpen} />
            :
            <div className="chat-button" onClick={() => chatOpen()}>
               <img src={chatButton} alt="Chat button" />
            </div>
         }
      </>
   )
}

export default Root