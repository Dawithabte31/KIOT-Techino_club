import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Datas from "./data";
import debounce from "lodash.debounce";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blog({members}) {
  const PF = `${import.meta.env.VITE_BASE_URL}images/`;
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slidessToShow, setSlidesToShow] = useState(1);
  useEffect(() => {
    const handleResize = debounce(() => {
      setScreenWidth(window.innerWidth);
    }, 200);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth >= 1024) {
      setSlidesToShow(3);
    } else if (screenWidth >= 768) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  }, [screenWidth]);

  let settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidessToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoPlaySpeed: 1000,
    useScroll: true,
  };

  return (
    <div className="profile--container">
      <h2 className="profile--header text-secondary mb-5">Team Leaders<span className="text-primary"> 2024</span></h2>
      <Slider {...settings}>
        {members && members.map((member) => (
          <div className="profile" key={member.fullname}>
            <div className="profile--image  ">
              <img src={PF + member.photo} alt={`image of ${member.fullname}`} />
            </div>
            <div className="profile--notation border-spacing-x-4">
              <h3 className="profile--name text-center text-xl font-medium font-mono ">{member.fullname}</h3>
              <p className="profile--description text-center text-gray-900">{member.desc}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Blog;
