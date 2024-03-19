import React, { useState, useEffect } from "react";
import Slider from "react-slick";

export default function services({services}) {
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
  // const [isVisible, setIsvisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const element = document.getElementById("services--containers");
  //     const position = element.getBoundingClientRect();
  //     // console.log(position);
  //     if (position.top >= 0 && position.bottom <= window.innerHeight) {
  //       setIsvisible(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);


  return (
    <div
      className={`services--container`}
    >
      <h1 className="services--header">Services we provide</h1>
      <Slider {...settings}>
        {services && services.map((service) => (
          <div className="services">
            <div className="services--image">
            {service.photo && <img src={PF + service.photo} alt='pic' className="services--img"/>}
            </div>
            <div className="service--message">
              <div className="services--title">{service.title}</div>
              <div className="services--description">{service.description}</div>
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
