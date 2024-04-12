import React, { useState } from "react";
import rightPng from "../images/contact svg.png";
import Footer from "../components/footer";
import axios from "axios";

export default function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/messages/create", {
        name: name,
        email: email,
        message: message,
      });
      window.location.href = "/contact";
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="contact--container">
        <div className="contact--info">
          <h2 className="contact--header">Get in touch</h2>
          <p>we are here for you! how can we help</p>
          <form action="submit" onSubmit={handleSubmit}>
            <div className="name">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <input
                type="textarea"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button className="contact--btn bn5" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="contact--image">
          <img
            src={rightPng}
            alt="this is jsut a png formated image that illustrates a contact places"
          />
        </div>
      </div>
      <Footer />
    </>
  );
}
