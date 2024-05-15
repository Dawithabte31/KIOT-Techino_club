import React, { useState } from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
export default function projects({ projects }) {
  const PF = `${import.meta.env.VITE_BASE_URL}images/`;
  // console.log(projects.desc);
  const [showMore, setShowMore] = useState(-1);

  function handleClick(index) {
    setShowMore(index);
  }

  function handleClose() {
    setShowMore(-1);
  }

  return (
    <section className=" project--container--main mt-28 bg- " id="Project">
      <h1 className="porjects--header text-secondary">Projects we recently developed</h1>
      <p className="text-center text-gray-500">Projects developed by the members of techino club</p>
      {projects &&
        projects.map((project, index) => (
          <motion.div
            className="project--container mt-6"
            key={index}
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.7 }}
          >
            <div className="project--image--container">
              {project.photo && (
                <img
                  src={PF + project.photo}
                  alt="pic"
                  className="project--image"
                />
              )}
              <button
                className="project--button bn5"
                onClick={() => handleClick(index)}
              >
                Read More
              </button>
              <div className="project--described">
                <h1 className="title--first">{project.proname}</h1>
                <p className="description--first">{project.desc}</p>
              </div>
              {showMore === index && (
                <div className="messageDialog">
                  <div className="inner--popup">
                    <p className="description--mobile">{project.desc}</p>
                    <span className="description--close" onClick={handleClose}>
                      x
                    </span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
    </section>
  );
}
