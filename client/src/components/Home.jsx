import React from "react";
import student from "../images/student.png";
import "../App.css";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div  className="md:px-12 p-4 max-w-screen-2xl mt-28" id='home'>
     <Banner student={student}  heading={"Let's Talk About The Future!"} subheading={"Welcome To Techino club Join our Techino club today and become part of a vibrant community that's shaping the future of technology."} btn1={"Be A Member"}/>
    </div>
  );
};

export default Home;
