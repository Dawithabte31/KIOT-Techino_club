import React, { useContext, useState } from "react";
import RegistrationTable from "./registration/RegistrationTable";
import { Context } from "../../context/Context";
import axios from "axios";

// import { Context } from './context/Context';

const UserBrd = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const renderContent = () => {
    switch (selectedMenuItem) {
      case "Registration":
        return <RegistrationTable />;
      default:
        return null;
    }
  };

  const { dispatch } = useContext(Context);
  const handleLogout = () => {
    try {
      axios.post("http://localhost:3000/api/logout");
      dispatch({ type: "LogOut" });
      localStorage.removeItem("token");
      window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div
      className="admindashboard"
      style={{ display: "flex", fontFamily: "Arial, sans-serif" }}
    >
      {/* Sidebar */}
      <div
        style={{
          width: "200px",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          padding: "20px",
        }}
      >
        <h2
          style={{ fontSize: "1.5rem", marginBottom: "20px", color: "#ecf0f1" }}
        >
          User
        </h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{
              padding: "10px",
              cursor: "pointer",
              borderBottom: "1px solid #34495e",
              transition: "background-color 0.3s ease, opacity 0.3s ease",
              opacity: 1,
            }}
            onClick={() => setSelectedMenuItem("Registration")}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "white")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#2c3e50")}
          >
            Registration
          </li>
        </ul>

        <button className="bg-white w-6 text-center text-black active:bg-gray-400" onClick={handleLogout}>Logout</button>
      </div>
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default UserBrd;
