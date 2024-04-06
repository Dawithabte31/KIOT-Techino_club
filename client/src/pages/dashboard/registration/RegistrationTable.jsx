import React, { useContext, useEffect, useState } from "react";
import EditRegister from "./RegistrationEdit";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { Context } from "../../../context/Context";

const RegiterTable = () => {
  const { user } = useContext(Context);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedRegisterId, setSelectedRegisterId] = useState(null);
  const [register, setRegister] = useState([]);
  const [status, setStatus] = useState(register.status);
  const getRegisters = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/registers/allregisters`
      );
      setRegister(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRegisters();
  }, []);

  const openEditModal = (registerId) => {
    setSelectedRegisterId(registerId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedRegisterId(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the member
      await axios.put(`http://localhost:3000/api/registers/${register._id}`, {
        fullname: fullname,
        age: age,
        sex: sex,
        email: email,
        departement: departement,
        skills: skills,
        why: why,
      });
      onUpdate();
      onClose();
    } catch (error) {
      console.error("Error updating member:", error);
    }
  };
  const handleUpdatestatus = async (registerId) => {
    try {
       // Send a PUT request to update the register status to "registered"
      await axios.put(
        `http://localhost:3000/api/registers/update/${registerId}`,
        
        {
          fullname,
          age,
          sex,
          email,
          departement,
          skills,
          why,
          status: "registered",
        }
      );
      console.log("Updated status to 'registered' successfully");
  
      } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  

  const handleDelete = async (registerId) => {
    try {
      const registerToDelete = register.find(
        (register) => register._id === registerId
      );

      if (!registerToDelete) {
        console.error("request not found");
        return;
      }
      await axios.delete(
        `http://localhost:3000/api/registers/delete/${registerToDelete._id}`,
        {
          data: { register: registerToDelete.fullname },
        }
      );

      console.log("request deleted successfully");
      // Update the members after deletion
      getRegisters();
    } catch (err) {
      console.error("Error deleting request:", err);
    }
  };

  return (
    <div style={{ maxWidth: "100%", margin: "0 auto" }}>
      <div className="addevent">
        <NavLink to="/addregister">
          <button>Register</button>
        </NavLink>
      </div>
      <table
        style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Fullname</th>
            <th style={tableHeaderStyle}>age</th>
            <th style={tableHeaderStyle}>sex</th>
            <th style={tableHeaderStyle}>Email</th>
            <th style={tableHeaderStyle}>Departement</th>
            <th style={tableHeaderStyle}>Skill</th>
            <th style={tableHeaderStyle}>why</th>
            <th style={tableHeaderStyle}>status</th>
            <th style={tableHeaderStyle}>action</th>
          </tr>
        </thead>
        <tbody>
          {register.map((register) => (
            <tr key={register._id}>
              <td style={tableCellStyle}>{register.fullname}</td>
              <td style={tableCellStyle}>{register.age}</td>
              <td style={tableCellStyle}>{register.sex}</td>
              <td style={tableCellStyle}>{register.email}</td>
              <td style={tableCellStyle}>{register.departement}</td>
              <td style={tableCellStyle}>{register.skill}</td>
              <td style={tableCellStyle}>{register.why}</td>
              <td style={tableCellStyle}>{register.status}</td>
              <td style={tableCellStyle}>
                {
                  <div>
                    <button
                     onClick={() => handleUpdate(register._id)}
                      style={actionButtonStyle}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleUpdatestatus(register._id)}
                      style={actionButtonStyle}
                    >
                      verify
                    </button>
                  </div>
                }
                <button
                  style={{ ...actionButtonStyle, marginLeft: "0.5rem" }}
                  onClick={() => handleDelete(register._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && (
        <EditRegister
          registerId={selectedRegisterId}
          onClose={closeEditModal}
          onUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

const tableHeaderStyle = {
  background: "#f2f2f2",
  padding: "0.5rem",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "0.5rem",
  borderBottom: "1px solid #ddd",
};

const photoStyle = {
  width: "40px",
  height: "40px",
  borderRadius: "50%",
  objectFit: "cover",
};

const actionButtonStyle = {
  cursor: "pointer",
  padding: "0.25rem 0.75rem",
  border: "none",
  borderRadius: "0.25rem",
  transition: "background-color 0.3s ease",
};

export default RegiterTable;
