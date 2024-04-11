import React, { useState } from "react";
export default function projects({ projects }) {
  const PF = "http://localhost:3000/images/";
  // console.log(projects.desc);
  const [showMore, setShowMore] = useState(-1);

  function handleClick(index) {
    setShowMore(index);
  }

  function handleClose() {
    setShowMore(-1);
  }

  return (
    <section className="project--container--main">
      <h1 className="porjects--header">Projects we recently developed</h1>
      {projects &&
        projects.map((project, index) => (
          <div className="project--container" key={index}>
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
          </div>
        ))}
    </section>
  );
}
