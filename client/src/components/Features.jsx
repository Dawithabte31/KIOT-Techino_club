import React from "react";

import bird from "../images/bird.png";
import team from "../images/team.png";
import workshop from "../images/workshop.png"
import project from "../images/project.png"

import { motion } from "framer-motion";
import { fadeIn } from "../variants";
function Features() {
  return (
    <div className="my-24 md:px-14 px-4 max-w-screen-2xl mx-auto px-5" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          className="lg:w-2/5"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.4 }}
        >
          <h3 className="text-3xl text-secondary font-bold lg:w-1/2 mb-3">
            Our features
          </h3>
          <p className="text-base text-tertiary">
            Explore a diverse array of events, workshops, and collaborative
            projects tailored to ignite your passion for technology. Benefit
            from personalized mentorship, networking opportunities, and
            exclusive resources designed to propel your journey forward.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col w-full lg:w-3/5"
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start md:gap-12 gap-8">
            <div className="bg-[#ffffff] rounded-[35px] h-96 shadow-3xl p-8  flex justify-center items-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:w-3 ">
              <div>
                <img className="" src={workshop} alt="" />
                <h5 className="text-2xl font-semibold text-secondary px-5 text-center mt-5">
                  Coding Workshops and Hackathons
                </h5>
              </div>
            </div>
            <div className="bg-[#ffffff] rounded-[35px] h-96 shadow-3xl p-8  flex justify-center items-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:w-3 md:mt-20 ">
              <div>
                <img className="" src={project} alt="" />
                <h5 className="text-2xl font-semibold text-secondary px-5 text-center mt-5">
                  Collaborative Projects{" "}
                </h5>
              </div>
            </div>
            <div className="bg-[#ffffff] rounded-[35px] h-96 shadow-3xl p-8  flex justify-center items-center items-center hover:-translate-y-4 transition-all duration-300 cursor-pointer md:w-3 ">
              <div className="">
                <img className="" src={team} alt="" />
                <h5 className="text-2xl font-semibold text-secondary px-5 text-center mt-5">
                  Convenient Team Works
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
