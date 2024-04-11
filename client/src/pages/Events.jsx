import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from  'axios';
import Footer from '../components/footer';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'  

function Events() {

  const [events,setEvents] = useState(null);
  const [loading,setLoading]=useState(true);
  const {search}=useLocation();
  useEffect(()=>{
    const fetchEvents = async()=>{
    const res = await axios.get('http://localhost:3000/api/events/allevents' +  search)
    setEvents(res.data)
    setLoading(false);
    }
    fetchEvents()
    },[search])
    const PF = "http://localhost:3000/images/";




  return (
    <div className='bg-gray-300'>
    
    <div className='event h-full'>
  <h2 className='text-gray-500 h-40 flex justify-center text-4xl'>EVENTS</h2>
  <div className='flex flex-wrap justify-center'>
    {!loading ? (
      events && events.map((event, index) => (
        <div key={index} className='event-wrapp w-full sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 px-4 mb-8'>
          {event.photo && <div className='object-cover w-full h-full'>
  <img className='w-full h-full object-cover' src={PF + event.photo} alt="pic" />
</div>
}
          <div className='event-content w-full'>
            <h2 className='text-xl font-semibold mb-2'>{event.title}</h2>
            <p className='text-sm'>{event.desc}</p>
            <a className='block mt-2 text-center text-blue-500 hover:text-blue-700' href='http://localhost:5173/login'>Join</a>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center w-full">
        <Skeleton className="mt-3 mb-2" width={['100%', '400px']} height="250px"></Skeleton>
        <Skeleton className='' width={['100%', '400px']} height="30px"></Skeleton>
      </div>
    )}
  </div>
</div>

    <Footer/>
    </div>
  )
}

export default Events