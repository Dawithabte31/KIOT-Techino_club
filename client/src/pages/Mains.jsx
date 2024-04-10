import React from "react";
import Back from "../images/back.mp4";
import Blog from "../components/Blog";
import Services from "../components/services";
import Projects from "../components/projects";
import { useLocation } from 'react-router-dom';
import axios from  'axios';
import { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/footer";
import kiot from "../images/kiot.jpg"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'  

// console.log(location);

export default function Mains() {
   const [projects,setProjects] = useState(null);
   const [services,setServices] = useState(null);
   const [members,setMembers] = useState(null);
   const [loadingp,setLoadingp]=useState(true);
   const [loadings,setLoadings]=useState(true);
   const [loadingm,setLoadingm]=useState(true);

  const {search}=useLocation();
  useEffect(()=>{
    const fetchProjects = async()=>{
    const res = await axios.get('http://localhost:3000/api/projects/allprojects' +  search)
    setProjects(res.data);
    setLoadingp(false);
    }
    const fetchServices = async()=>{
      const res = await axios.get('http://localhost:3000/api/services/allservices' +  search)
      setServices(res.data);
      setLoadings(false);
      }
     const fetchMembers = async()=>{
        const res = await axios.get('http://localhost:3000/api/members/allmembers' +  search)
        setMembers(res.data);
        setLoadingm(false);
        }
        
    fetchMembers()
    fetchServices()
    fetchProjects()
    },[search])
    
    
  return (
    
    <>
      <main className="main--container">
        <div className="hero-section">
          {/* <img className="mx-auto mx-auto h-screen" src={kiot} alt="" /> */}
          <video autoPlay loop mmuted playsInline>
            <source src={Back} type="video/mp4" />
          </video>
        </div>
        <div className="member-adding">
          <h1 className="techino">
            <span className="techlogo">&equiv;</span>TECH<em>INO</em>
          </h1>
          <h1 className="main--header">Let's Talk About The Future!</h1>
          <button className="bn5">
            <NavLink to="/signup">Be a Member</NavLink>
          </button>
        </div>
      </main>
      <Services services={services}/>
      <Projects projects={projects} />
      <Blog     members={members}/>
      <Footer/>
    </>

  );
}




