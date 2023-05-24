import React from 'react'
import mozila from '../../assets/images/clients/mozilla.png'
import bower from '../../assets/images/clients/bower.png'
import codepen from '../../assets/images/clients/codepen.png'
import envato from '../../assets/images/clients/envato.png'
import firefox from '../../assets/images/clients/firefox.png'
import grunt from '../../assets/images/clients/grunt.png'
import evernote from '../../assets/images/clients/evernote.png'
import github from '../../assets/images/clients/github.png'
import jQuery from '../../assets/images/clients/jQuery.png'
import wordpress from '../../assets/images/clients/wordpress.png'

const Clients = () => {
   return (
      <section id="clients">

         <div className="row animate-this">
            <h2>Наши клиенты</h2>
            <div className="col-twelve">
               <div className="client-lists owl-carousel">
                  <div><img src={mozila} alt="Mozilla" title="Mozilla" /></div>
                  <div><img src={bower} alt="Bower" title="Bower" /></div>
                  <div><img src={codepen} alt="Codepen" title="Codepen" /></div>
                  <div><img src={envato} alt="Envato" title="Envato" /></div>
                  <div><img src={firefox} alt="Firefox" title="Firefox" /></div>
                  <div><img src={grunt} alt="Grunt" title="Grunt" /></div>
                  <div><img src={evernote} alt="Evernote" title="Evernote" /></div>
                  <div><img src={github} alt="Github" title="Github" /></div>
                  <div><img src={jQuery} alt="jQuery" title="jQuery" /></div>
                  <div><img src={wordpress} alt="Wordpress" title="Wordpress" /></div>
               </div>

            </div>
         </div>

      </section>
   )
}

export default Clients