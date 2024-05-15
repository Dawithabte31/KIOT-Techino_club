import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

export default function services({ services }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoPlaySpeed: 2000,
  };
  const PF = `${import.meta.env.VITE_BASE_URL}images/`;

  return (
    <div
      className="  flex max-w-screen-2xl mx-auto  flex-col md:gap-8 md:flex-row mt-[250px] "
      id="Service"
    >
      <motion.div
        className="md:w-1/2"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
      >
        <Slider {...settings} className="">
          {services &&
            services.map((service, key) => (
              <div
                className="flex justify-center flex-wrap md:gap-[300px] relative "
                key={key}
              >
                <div className="services--image md:w-[500px] md:mt-2 rounded-md">
                  {service.photo && (
                    <img
                      src={PF + service.photo}
                      alt="pic"
                      className="services--img"
                    />
                  )}
                </div>
                <div className="service--message">
                  <div key={service._id} className="services--title">
                    {service.title}
                  </div>
                  <button className="service--btn">
                    <a href="#" className="service--btn--link">
                      <span>Get Started</span>
                    </a>
                  </button>
                </div>
              </div>
            ))}
        </Slider>
      </motion.div>
      <motion.div
        className="md:w-2/5 mx-4 md:mt-1 mt-8 "
        variants={fadeIn("left", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.4 }}
      >
        <h2 className="md:text-5xl text-3xl font-bold text-secondary mb-5 leading-normal">
          We have been providing services to our university community
          <span className="text-primary"> for many years.</span>
        </h2>
        <p className="text-tertiary text-lg mb-7">
          Discover a world of tech innovation with our club! From web and app
          development to coding workshops, we offer diverse services for all.
          Join us to learn, create, and make a difference through technology."
        </p>
      </motion.div>
    </div>
  );
}
