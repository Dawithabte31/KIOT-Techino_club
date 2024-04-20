import React, { useContext, useState } from "react";
import RegistrationTable from "./registration/RegistrationTable";
import { Context } from "../../context/Context";
import axios from "axios";

const User = () => {
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
  const [active, seActive] = useState(false);
  const handlclickopen = () => {
    seActive(true);
  };
  const handlclickclose = () => {
    seActive(false);
  };
  return (
    <div
      className="admindashboard"
      style={{ display: "flex", fontFamily: "Arial, sans-serif" }}
    >
      <span
        onClick={handlclickopen}
        class={`material-symbols-outlined ${
          active ? "hidden" : ""
        }  absolute sm:hidden md:hidden lg:hidden ml-2 mt-3 font-medium text-gray-400 cursor-pointer`}
      >
        menu
      </span>
      <div
        className={`${active ? "" : "hidden"} lg:block sm:block`}
        style={{
          // display:"none",
          width: "200px",
          backgroundColor: "#2c3e50",
          color: "#ecf0f1",
          padding: "20px",
        }}
      >
        <div className="flex gap-6">
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "20px",
              color: "#ecf0f1",
            }}
          >
            <span class="material-symbols-outlined mr-2 ml-1">person</span>
            User
          </h2>
          <span
            onClick={handlclickclose}
            class="material-symbols-outlined block sm:hidden md:hodden lg:hidden text-gray-400 cursor-pointer "
          >
            arrow_back
          </span>
        </div>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            className="hover:bg-white hover:text-black"
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
        </ul>

        <div
          className="flex cursor-pointer mt-20"
          onClick={(e) => handleLogout(e)}
        >
          <span class="material-symbols-outlined ">logout</span>
          Logout
        </div>
      </div>
      <div style={{ flex: 1, padding: "20px", backgroundColor: "#ecf0f1" }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default User;
