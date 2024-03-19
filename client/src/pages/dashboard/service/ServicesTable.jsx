import React, { useEffect, useState } from "react";
import EditService from "./ServiceEdit"; 
import axios from "axios";
import { NavLink } from "react-router-dom";


const ServicesTable = () => {

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(null);
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/services/allservices`
      );
      setServices(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  },[]); 

  const openEditModal = (serviceId) => {
    setSelectedServiceId(serviceId);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedServiceId(null);
    setEditModalOpen(false);
  };

  const handleUpdate = async () => {
    try {
      // Send a PUT request to update the member
      await axios.put(`http://localhost:3000/api/services/${service._id}`, {
        title: fullName,
        desc: description,
        photo: photo,
      });
      onUpdate();
      onClose();
      
    } catch (error) {
      console.error('Error updating member:', error);
    }
  };
  const handleDelete = async (serviceId) => {
    try {
      const serviceToDelete = services.find((service) => service._id === serviceId);
  
      if (!serviceToDelete) {
        console.error("Member not found");
        return;
      }
  
      await axios.delete(`http://localhost:3000/api/services/delete/${serviceToDelete._id}`, {
        data: { service: serviceToDelete.fullname }
      });
      console.log("Member deleted successfully");
      // Update the members after deletion
      getServices();
    } catch (err) {
      console.error("Error deleting member:", err);
    }
  };
  


  return (
    <div className="event-div">
    <div className="event-div2"  style={{ maxWidth: "100%", margin: "0 auto" }}>
       <div className="addevent">
            <NavLink to="/addservice"><button>Add New service</button></NavLink>
         </div>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1rem" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>ID</th>
            <th style={tableHeaderStyle}>Title</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Photo</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
              <tr key={service._id}>
              <td style={tableCellStyle}>{service._id}</td>
              <td style={tableCellStyle}>{service.title}</td>
              <td style={tableCellStyle}>{service.desc}</td>
              <td style={tableCellStyle}>
              <img src={service.photo} alt={service.title} style={photoStyle} />
              </td>
              <td style={tableCellStyle}>
                  <button  onClick={() => openEditModal(service._id)} style={actionButtonStyle}>Edit</button>
                  <button style={{ ...actionButtonStyle, marginLeft: "0.5rem" }} onClick={()=>handleDelete(service._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isEditModalOpen && (
        <EditService serviceId={selectedServiceId} onClose={closeEditModal} onUpdate={handleUpdate} />
      )}
    </div>
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

export default ServicesTable;

