import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from  'axios';
import Footer from '../components/footer';

function Events() {

  const [events,setEvents] = useState(null);
  const {search}=useLocation();
  useEffect(()=>{
    const fetchEvents = async()=>{
    const res = await axios.get('http://localhost:3000/api/events/allevents' +  search)
    setEvents(res.data)
    }
    fetchEvents()
    },[search])
    const PF = "http://localhost:3000/images/";




  return (
    <>
    <div className='event'>
        <h1>OUR EVENTS</h1>
    {events && events.map((event, index) => (    
    <div className='event-justify'>
    <div className='event-wrapp'> 
      {event.photo &&<img src={PF + event.photo} alt="pic" />}
        <div className='event-content'>
           <h2>{event.title}</h2>
           <p>{event.desc}</p>
           <a href='http://localhost:5173/login'>Join</a>
        </div>
      </div>
      
    </div>))}
    </div>
    <Footer/>
    </>
  )
}

export default Events