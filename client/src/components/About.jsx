import React from "react";
import about from "../images/about.png";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function About() {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto space-y-12 mt-[30px] md:mt-[200px] mt">

      <div
        className="flex flex-col md:flex-row-reverse justify-between items-center gap-8"
        id="About"
      >
        <motion.div
          className="md:w-1/3"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={about} className="h-[350px]" alt="" />
        </motion.div>

        <motion.div
          className="md:w-2/3"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="md:text-5xl text-3xl font-bold text-secondary mb-5 leading-normal">
            About
            <span className="text-primary"> Techino club</span>
          </h2>
          <p className="text-tertiary text-lg mb-7">
            Welcome to Techino Club, the premier technology community at Wollo
            University. Founded by students and fueled by innovation, we're
            dedicated to empowering students to excel in the ever-evolving world
            of technology. At Techino Club, we're more than just a club—we're a
            supportive community where students come together to learn,
            collaborate, and grow. From coding workshops to hackathons, we offer
            a wide range of opportunities for students to sharpen their skills
            and make a difference.
          </p>
          <NavLink to="/login" className="btnPrimary bg-secondary text-white p-2 rounded w-4">
            Get Started
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}

export default About;
