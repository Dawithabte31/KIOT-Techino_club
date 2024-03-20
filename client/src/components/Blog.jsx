import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Datas from "./data";
import debounce from "lodash.debounce";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Blog({members}) {
  const PF = "http://localhost:3000/images/";
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
      <h2 className="profile--header">Members</h2>
      <Slider {...settings}>
        {members && members.map((member) => (
          <div className="profile">
            <div className="profile--image">
              <img src={PF + member.photo} alt={`image of ${member.fullname}`} />
            </div>
            <div className="profile--notation">
              <p className="profile--name">{member.fullname}</p>
              <p className="profile--description">{member.desc}</p>
              <a className="bn5">Read More</a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Blog;
