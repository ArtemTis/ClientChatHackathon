import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer>
         <div className="footer-main">

            <div className="row">

               <div className="col-five tab-full footer-about">
                  <h4 className="h05">Наш офис.</h4>
                  <p>Москва, Серебряническая наб., д. 29 БЦ «Silver City»</p>
               </div>

               <div className="col-three tab-full footer-social">

                  <h4 className="h05">Следите за нами.</h4>

                  <ul className="list-links">
                     <li><Link to="https://vk.com/">Вконтакте</Link></li>
                     <li><Link to="https://web.telegram.org/">Telegram</Link></li>
                  </ul>

               </div>

               <div className="col-four tab-full footer-subscribe end">

                  <h4 className="h05">© 2023, ООО «РОВИ Тех»</h4>

                  <p> <Link to="#" target="_blank" title="Политика обработки персональных данных">Политика обработки персональных данных</Link></p>

               </div>

            </div>

         </div>

         <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#top">
               <i className="fa fa-long-arrow-up" aria-hidden="true"></i>
            </a>
         </div>
      </footer>
   )
}

export default Footer