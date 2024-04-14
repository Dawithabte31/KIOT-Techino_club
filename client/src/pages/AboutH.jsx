import React from 'react'
import Footer from '../components/footer'

function AboutH() {
  return (
    <div className='w-full text-center'>
    <div className='mt-8 w-full flex justify-center flex-col text-center h-screen'>
       <h1 className='about_h text-5xl font-semibold text-blue-800'>
        ABOUT US
       </h1>
        <p className='self-center text-start w-9 italic  text-clip ' >
        Welcome to Techino Club, the premier technology community at Wollo University. Founded by students and fueled by innovation, we're dedicated to empowering students to excel in the ever-evolving world of technology.
At Techino Club, we're more than just a club—we're a supportive community where students come together to learn, collaborate, and grow. From coding workshops to hackathons, we offer a wide range of opportunities for students to sharpen their skills and make a difference.
Our mission is simple: to foster creativity, inspire innovation, and drive positive change. Through our projects and initiatives, we aim to tackle real-world challenges and make a meaningful impact in our university and beyond.
Join us at Techino Club and unleash your potential. Together, let's innovate, create, and shape the future of technology. Welcome to Techino Club—where ideas become reality.
       </p>
       </div>

  <Footer/>
  </div>
  )
}

export default AboutH