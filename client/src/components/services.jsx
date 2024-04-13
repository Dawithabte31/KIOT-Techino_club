import React, { useState, useEffect } from "react";
import Slider from "react-slick";

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
  const PF = "http://localhost:3000/images/";

  return (
    <div className={`services--container`}>
      <h1 className="services--header">Services we provide</h1>
      <Slider {...settings}>
        {services &&
          services.map((service, key) => (
            <div className="services">
              <div className="services--image">
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
                <div className="services--description">
                  {service.description}
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
    </div>
  );
}
