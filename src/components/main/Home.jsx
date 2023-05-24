import React from 'react'
import { Link as LinkTo } from 'react-scroll'

const Home = () => {
   return (
      <section id="home">

         <div className="overlay"></div>

         <div className="home-content-table">
            <div className="home-content-tablecell">
               <div className="row">
                  <div className="col-twelve">

                     <h1 className="animate-intro">
                        Мы оказываем лучшие финансовые услуги на рынке.
                     </h1>

                     <div className="more animate-intro">
                        <LinkTo className="smoothscroll button stroke" to="about" spy={true} smooth={true} offset={0} duration={500}>
                           Больше о нас
                        </LinkTo>
                     </div>

                  </div>
               </div>
            </div>
         </div>

      </section>
   )
}

export default Home