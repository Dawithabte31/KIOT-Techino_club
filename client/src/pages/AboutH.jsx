import React from 'react'
import Footer from '../components/footer'

function AboutH() {
  return (
    <div className='w-full text-center'>
    <div className='mt-8 w-full flex justify-center flex-col text-center h-screen'>
       <h1 className='about_h text-5xl font-semibold text-blue-800'>
        ABOUT US
       </h1>
        <p className='self-center text-start w-7 italic  text-clip ' >
 Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Dolorum, laudantium eaque esse aliquid molestiae numquam
 commodi autem error dicta hic eligendi officiis quodrecus
 andae id quasi sint similique voluptatem quam! Lorem ipsum 
 dolor sit amet consectetur adipisicing elit. Autem nihil animi
 atque tempora dolorem? Nobis numquam totam consequatur corrupti vel 
 quo, deserunt blanditiis qui incidunt, fuga sint vitae molestias quasi.
       </p>
       </div>

  <Footer/>
  </div>
  )
}

export default AboutH