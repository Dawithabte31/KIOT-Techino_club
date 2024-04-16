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
      axios.post("http://localhost:3000/api/logout");
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

  return (
    <div
      className="admindashboard "
      style={{ display: "flex", fontFamily: "Arial, sans-serif" }}
    >
      <div
        style={{
          width: "200px",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          padding: "20px",
        }}
      >
        <h2 className="my-4  flex justify-center h-auto w-auto font-extrabold">
          <span class="material-symbols-outlined">person</span>
          Admin
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            className="hover:bg-white hover:text-black text-center"
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
            className="hover:bg-white hover:text-black text-center"
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
            className="hover:bg-white hover:text-black text-center"
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
            className="hover:bg-white hover:text-black text-center"
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
            className="hover:bg-white hover:text-black text-center"
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
            className="hover:bg-white hover:text-black text-center"
          >
            Service
          </li>
          <li
            className="hover:bg-white hover:text-black text-center"
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

        <button
          className="bg-white w-6 m-5 text-center text-black active:bg-gray-400 mt-8 text-center border-round"
          onClick={(e) => handleLogout(e)}
        >
          Logout
        </button>
      </div>
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default Admin;
