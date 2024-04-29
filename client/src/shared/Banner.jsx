import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { NavLink } from "react-router-dom";

function Banner({ student, heading, subheading, btn1 }) {
  return (
    <div className="gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9  ">
      <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-10">
        {/* banner image */}
        <motion.div
          className=""
          variants={fadeIn("down", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <img src={student} alt="" className="lg:h-[350px]" />
        </motion.div>
        {/* banner content */}
        <motion.div
          className="md:w-3/5"
          variants={fadeIn("up", 0.7)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <h2 className=" text-gray-800 md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
            {heading}
          </h2>
          <p className="text-black text-[#EBEBEB] text-2xl mb-8">
            {subheading}
          </p>
          <NavLink to="/signup">
            <button className="btn py-3 px-6  bg-secondary font-semibold text-white rounded hover:bg-primary transition-all duration-300 text-2xl">
              {btn1}
            </button>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
}

export default Banner;
