import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import MembersTable from "./member/MembersTable";
import EventsTable from "./Event/EventsTable";
import ProjectsTable from "./project/ProjectsTable";
import RegistrationTable from "./registration/RegistrationTable";
import ServicesTable from "./service/ServicesTable";
import MessagesTable from "./message/MessagesTable";
import axios from "axios";
import Registered from "./registeredusers/Registered";

const Admin = () => {
  const { dispatch } = useContext(Context);
  const handleLogout = (e) => {
    e.preventDefault();
    try {
      axios.post(`${import.meta.env.VITE_BASE_URL}api/logout`);
      dispatch({ type: "LogOut" });
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const renderContent = () => {
    switch (selectedMenuItem) {
      case "Members":
        return <MembersTable />;
      case "Events":
        return <EventsTable />;
      case "Projects":
        return <ProjectsTable />;
      case "Registration":
        return <RegistrationTable />;
      case "Service":
        return <ServicesTable />;
      case "Message":
        return <MessagesTable />;
      case "MembersList":
        return <Registered />;
      default:
        return null;
    }
  };
  const [active, seActive] = useState(false);
  const handlclickopen = () => {
    seActive(true);
  };
  const handlclickclose = () => {
    seActive(false);
  };
  return (
    <div
      className="admindashboard mt-[100px]"
      style={{ display: "flex", fontFamily: "Arial, sans-serif" }}
    >
      <span
        onClick={handlclickopen}
        className={`material-symbols-outlined ${
          active ? "hidden" : ""
        }  absolute sm:hidden md:hidden lg:hidden ml-2 mt-3 font-medium text-gray-400  cursor-pointer `}
      >
        menu
      </span>

      <div
        className={`${active ? "" : "hidden"} lg:block sm:block`}
        style={{
          width: "200px",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          padding: "20px",
        }}
      >
        <div className="flex">
          <h2 className="my-4  flex justify-center h-auto w-auto font-extrabold ">
            <span className="material-symbols-outlined">person</span>
            Admin
          </h2>
          <span
            onClick={handlclickclose}
            className="material-symbols-outlined block sm:hidden md:hodden lg:hidden mt-4 mx-7 text-gray-400 cursor-pointer"
          >
            arrow_back
          </span>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            className="hover:bg-white hover:text-black "
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("Members")}
          >
            Members
          </li>
          <li
            className="hover:bg-white hover:text-black "
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("MembersList")}
          >
            Members List
          </li>
          <li
            className="hover:bg-white hover:text-black"
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("Events")}
          >
            Events
          </li>
          <li
            className="hover:bg-white hover:text-black"
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("Projects")}
          >
            Projects
          </li>
          <li
            className="hover:bg-white hover:text-black "
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("Registration")}
          >
            Registration
          </li>
          <li
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("Service")}
            className="hover:bg-white hover:text-black"
          >
            Service
          </li>
          <li
            className="hover:bg-white hover:text-black"
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("Message")}
          >
            Message
          </li>
        </ul>
        <div
          className="flex cursor-pointer mt-8"
          onClick={(e) => handleLogout(e)}
        >
          <span className="material-symbols-outlined ">logout</span>
          Logout
        </div>
      </div>
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
