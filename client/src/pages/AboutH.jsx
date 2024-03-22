import React from 'react'
import Footer from '../components/footer'

function AboutH() {
  return (
    <>
    <div className='about_club_history'>
    <div className='about_club_history_desc'>
       <div className='about_club_history_flex'>
       <h1 className='about_h text-5xl mb-8'>
        ABOUT US
       </h1>
        <p className='about_club_history' >
 Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Dolorum, laudantium eaque esse aliquid molestiae numquam
 commodi autem error dicta hic eligendi officiis quodrecus
 andae id quasi sint similique voluptatem quam! Lorem ipsum 
 dolor sit amet consectetur adipisicing elit. Autem nihil animi
  atque tempora dolorem? Nobis numquam totam consequatur corrupti vel 
  quo, deserunt blanditiis qui incidunt, fuga sint vitae molestias quasi.
       </p>
       </div>
       <div className='image'>
       <img src="src/images/tech.jpg" alt="" />
       </div>
      
    </div> 
  </div>
  <Footer/>
  </>
  )
}

export default AboutH