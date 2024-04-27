import React from "react";
import Back from "../images/back.mp4";
import Blog from "../components/Blog";
import Services from "../components/services";
import Projects from "../components/projects";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Footer from "../components/footer";
import kiot from "../images/kiot.jpg";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Home from "../components/Home";
import Features from "../components/Features";
import AboutH from "./AboutH";
import About from "../components/About";

// console.log(location);

export default function Mains() {
  const [projects, setProjects] = useState(null);
  const [services, setServices] = useState(null);
  const [members, setMembers] = useState(null);
  const [loadingp, setLoadingp] = useState(true);
  const [loadings, setLoadings] = useState(true);
  const { search } = useLocation();
  useEffect(() => {
    const fetchProjects = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/projects/allprojects` + search
      );
      setProjects(res.data);
      setLoadingp(false);
    };
    const fetchServices = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/services/allservices` + search
      );
      setServices(res.data);
      setLoadings(false);
    };
    const fetchMembers = async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}api/members/allmembers` + search
      );
      setMembers(res.data);
    };

    fetchMembers();
    fetchServices();
    fetchProjects();
  }, [search]);

  return (
    <div>
      {/* <main className="main--container">
        <div className="hero-section">
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
      </main> */}
      <Home />
      <Features />
      {!loadings ? (
        <Services services={services} />
      ) : (
        <div className="text-center md:grid grid-cols-2 md:mt-[250px]">
          <Skeleton className="mt-3 mb-2" width="75%" height="300px"></Skeleton>
          <div>
            <Skeleton className="" width="90%" height="150px"></Skeleton>
            <Skeleton className="mt-4" width="90%" height="150px"></Skeleton>
          </div>
        </div>
      )}

      {/* <Services services={services}/> */}

      {!loadingp ? (
        <Projects projects={projects} />
      ) : (
        <div className="text-center ">
          <Skeleton className="mt-3 mb-2" width="50%" height="53px"></Skeleton>
          <Skeleton width="70%" height="503px"></Skeleton>
          <Skeleton className="mt-5" width="70%" height="500px"></Skeleton>
        </div>
      )}
      <About />
      <Blog members={members} />
      <Footer />
    </div>
  );
}
